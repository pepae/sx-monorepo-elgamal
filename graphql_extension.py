#!/usr/bin/env python3
"""
GraphQL Extension for Snapshot UI Adapter
Adds GraphQL support while keeping the existing REST endpoints.
"""

import graphene
from graphene import ObjectType, String, List, Int, Float, Boolean, Field, Argument, Schema
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
import strawberry
from typing import Optional, Dict, Any
import requests
import time
import secrets

# Your existing backend URLs
VOTING_BACKEND_URL = "http://localhost:5000"

def call_backend(method: str, endpoint: str, data: dict = None) -> dict:
    """Call our voting backend and handle errors."""
    try:
        url = f"{VOTING_BACKEND_URL}{endpoint}"
        if method == "GET":
            response = requests.get(url, timeout=10)
        elif method == "POST":
            response = requests.post(url, json=data, timeout=10)
        
        if response.status_code == 200:
            return response.json()
        return None
    except Exception as e:
        print(f"Backend communication error: {e}")
        return None

# ===================== GRAPHQL TYPES =====================

@strawberry.type
class SpaceType:
    id: str
    name: str
    about: str = ""
    network: str = "1"
    symbol: str = "VOTE"
    avatar: str = ""
    verified: bool = False
    private: bool = False
    flagged: bool = False
    admins: strawberry.Private[List[str]] = strawberry.field(default_factory=list)
    moderators: strawberry.Private[List[str]] = strawberry.field(default_factory=list)
    members: strawberry.Private[List[str]] = strawberry.field(default_factory=list)
    filters: strawberry.Private[Dict] = strawberry.field(default_factory=dict)
    plugins: strawberry.Private[Dict] = strawberry.field(default_factory=dict)
    voting: strawberry.Private[Dict] = strawberry.field(default_factory=dict)
    strategies: strawberry.Private[List[Dict]] = strawberry.field(default_factory=list)
    validation: strawberry.Private[Dict] = strawberry.field(default_factory=dict)
    voteValidation: strawberry.Private[Dict] = strawberry.field(default_factory=dict)
    proposalValidation: strawberry.Private[Dict] = strawberry.field(default_factory=dict)

@strawberry.type 
class ProposalType:
    id: str
    title: str
    body: str
    choices: List[str]
    start: int
    end: int
    author: str
    created: int
    state: str
    type: str = "single-choice"
    space: SpaceType
    scores: List[float] = strawberry.field(default_factory=list)
    scores_total: float = 0.0
    scores_by_strategy: List[List[float]] = strawberry.field(default_factory=list)
    scores_state: str = "pending"
    quorum: float = 0.0
    privacy: str = "shutter"
    app: Optional[str] = None
    discussion: Optional[str] = None
    execution: Optional[Dict] = None
    strategies: List[Dict] = strawberry.field(default_factory=list)
    validation: Dict = strawberry.field(default_factory=dict)
    voteValidation: Dict = strawberry.field(default_factory=dict)

@strawberry.type
class VoteType:
    id: str
    voter: str
    created: int
    proposal: ProposalType
    choice: int
    reason: str = ""
    metadata: Dict = strawberry.field(default_factory=dict)
    vp: float = 1.0
    vp_by_strategy: List[float] = strawberry.field(default_factory=list)
    vp_state: str = "final"

@strawberry.type
class UserType:
    id: str
    name: Optional[str] = None
    about: Optional[str] = None
    avatar: Optional[str] = None
    cover: Optional[str] = None
    twitter: Optional[str] = None
    github: Optional[str] = None
    created: int = 0

# ===================== GRAPHQL QUERIES =====================

@strawberry.type
class Query:
    
    @strawberry.field
    def space(self, id: str) -> Optional[SpaceType]:
        """Get a single space by ID"""
        return SpaceType(
            id=id,
            name="Encrypted DAO",
            about="A DAO using threshold encrypted voting",
            network="1",
            symbol="EVOTE",
            avatar="",
            verified=False,
            private=False,
            flagged=False
        )
    
    @strawberry.field
    def spaces(
        self, 
        first: int = 20, 
        skip: int = 0,
        where: Optional[Dict] = None,
        orderBy: Optional[str] = None,
        orderDirection: Optional[str] = None
    ) -> List[SpaceType]:
        """Get list of spaces"""
        space = SpaceType(
            id="encrypted-dao.eth",
            name="Encrypted DAO", 
            about="A DAO using threshold encrypted voting",
            network="1",
            symbol="EVOTE"
        )
        return [space]
    
    @strawberry.field
    def proposal(self, id: str) -> Optional[ProposalType]:
        """Get a single proposal by ID"""
        # Get current election status
        status_resp = call_backend("GET", "/api/status")
        if not status_resp:
            return None
            
        # Get proposal data
        proposals_resp = call_backend("GET", "/api/proposals")
        proposal_data = {}
        
        if proposals_resp and "data" in proposals_resp:
            proposals = proposals_resp["data"]
            for p in proposals:
                if p.get("id") == id:
                    proposal_data = p
                    break
            if not proposal_data and proposals:
                proposal_data = proposals[0]
        
        # Use election status as proposal data
        choices = status_resp.get("choices", ["For", "Against", "Abstain"])
        current_time = int(time.time())
        start_time = proposal_data.get("start", current_time - 3600)
        end_time = proposal_data.get("end", current_time + 3600)
        
        if current_time < start_time:
            state = "pending"
        elif current_time > end_time:
            state = "closed"
        else:
            state = "active"
        
        # Calculate scores
        scores = [0.0] * len(choices)
        votes_resp = call_backend("GET", "/api/ciphertexts")
        if votes_resp and "data" in votes_resp:
            votes = votes_resp["data"]
            for vote in votes:
                if "choice" in vote:
                    choice_idx = vote["choice"]
                    if 0 <= choice_idx < len(scores):
                        scores[choice_idx] += 1.0
        
        space = SpaceType(
            id="encrypted-dao.eth",
            name="Encrypted DAO",
            symbol="EVOTE"
        )
        
        return ProposalType(
            id=id,
            title=proposal_data.get("title", "Test Proposal"),
            body=proposal_data.get("body", "A test proposal for encrypted voting"),
            choices=choices,
            start=start_time,
            end=end_time,
            author=proposal_data.get("author", "0x" + secrets.token_hex(20)),
            created=start_time,
            state=state,
            type="single-choice" if status_resp.get("voting_mode") == "simple" else "basic",
            space=space,
            scores=scores,
            scores_total=sum(scores),
            scores_by_strategy=[scores],
            scores_state="final" if state == "closed" else "pending",
            strategies=[{"name": "ticket", "params": {"symbol": "EVOTE"}}],
            validation={"name": "basic", "params": {}},
            voteValidation={"name": "basic", "params": {}}
        )
    
    @strawberry.field 
    def proposals(
        self,
        first: int = 20,
        skip: int = 0, 
        where: Optional[Dict] = None,
        orderBy: Optional[str] = None,
        orderDirection: Optional[str] = None
    ) -> List[ProposalType]:
        """Get list of proposals"""
        
        # Get proposals from our backend
        proposals_resp = call_backend("GET", "/api/proposals")
        backend_proposals = []
        
        if proposals_resp and "data" in proposals_resp:
            backend_proposals = proposals_resp["data"]
        
        # If no proposals, create a mock one
        if not backend_proposals:
            status_resp = call_backend("GET", "/api/status")
            if status_resp and status_resp.get("initialized"):
                mock_proposal = {
                    "id": "0x" + secrets.token_hex(32),
                    "title": "Test Encrypted Proposal",
                    "body": "A test proposal for threshold encrypted voting",
                    "voting_mode": status_resp.get("voting_mode", "simple"),
                    "choices": status_resp.get("choices", ["For", "Against", "Abstain"])
                }
                backend_proposals = [mock_proposal]
        
        # Transform to GraphQL format
        proposals = []
        space = SpaceType(
            id="encrypted-dao.eth", 
            name="Encrypted DAO",
            symbol="EVOTE"
        )
        
        for bp in backend_proposals[skip:skip+first]:
            current_time = int(time.time())
            proposal = ProposalType(
                id=bp.get("id", "0x" + secrets.token_hex(32)),
                title=bp.get("title", "Test Proposal"),
                body=bp.get("body", "A test proposal for encrypted voting"),
                choices=bp.get("choices", ["For", "Against", "Abstain"]),
                start=bp.get("start", current_time - 3600),
                end=bp.get("end", current_time + 3600), 
                author=bp.get("author", "0x" + secrets.token_hex(20)),
                created=bp.get("start", current_time - 3600),
                state="active",
                space=space,
                scores=[10.0, 5.0, 2.0],  # Mock scores
                scores_total=17.0,
                scores_by_strategy=[[10.0, 5.0, 2.0]],
                strategies=[{"name": "ticket", "params": {"symbol": "EVOTE"}}],
                validation={"name": "basic", "params": {}},
                voteValidation={"name": "basic", "params": {}}
            )
            proposals.append(proposal)
            
        return proposals
    
    @strawberry.field
    def votes(
        self,
        first: int = 20,
        skip: int = 0,
        where: Optional[Dict] = None,
        orderBy: Optional[str] = None,
        orderDirection: Optional[str] = None  
    ) -> List[VoteType]:
        """Get list of votes"""
        
        votes_resp = call_backend("GET", "/api/ciphertexts")
        if not votes_resp:
            return []
            
        votes_data = votes_resp.get("data", [])
        
        # Mock space and proposal for votes
        space = SpaceType(id="encrypted-dao.eth", name="Encrypted DAO", symbol="EVOTE")
        proposal = ProposalType(
            id="0x" + secrets.token_hex(32),
            title="Test Proposal",
            body="Test",
            choices=["For", "Against"],
            start=int(time.time()) - 3600,
            end=int(time.time()) + 3600,
            author="0x" + secrets.token_hex(20),
            created=int(time.time()) - 3600,
            state="active",
            space=space
        )
        
        votes = []
        for vote_data in votes_data[skip:skip+first]:
            vote = VoteType(
                id=vote_data.get("id", "0x" + secrets.token_hex(32)),
                voter=vote_data.get("voter", "0x" + secrets.token_hex(20)),
                created=vote_data.get("created", int(time.time())),
                proposal=proposal,
                choice=vote_data.get("choice", 1),
                reason=vote_data.get("reason", ""),
                vp=1.0,
                vp_by_strategy=[1.0]
            )
            votes.append(vote)
            
        return votes

# ===================== MUTATIONS =====================

@strawberry.type  
class Mutation:
    @strawberry.field
    def vote(self, proposal: str, choice: int, reason: str = "") -> bool:
        """Cast a vote"""
        # This would integrate with your voting backend
        vote_data = {
            "vote": choice,
            "voter": "0x" + secrets.token_hex(20),  # Mock voter
            "reason": reason
        }
        result = call_backend("POST", "/api/vote", vote_data)
        return result is not None

# Create the schema
schema = strawberry.Schema(query=Query, mutation=Mutation)

def add_graphql_to_app(app: FastAPI):
    """Add GraphQL endpoint to existing FastAPI app"""
    
    # Add GraphQL endpoint
    graphql_app = GraphQLRouter(schema)
    app.include_router(graphql_app, prefix="/graphql")
    
    print("📊 GraphQL endpoint added at /graphql")
    print("🔍 GraphQL playground available at /graphql (in debug mode)")
    
    return app
