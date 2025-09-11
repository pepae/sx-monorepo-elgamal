#!/usr/bin/env python3
"""
Enhanced Snapshot UI Adapter with GraphQL Support
Translates between Snapshot UI and our voting backend with both REST and GraphQL endpoints.
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json
import time
import hashlib
import secrets
from typing import List, Dict, Any, Optional
import strawberry
from strawberry.fastapi import GraphQLRouter

# Configuration
VOTING_BACKEND_URL = "http://localhost:5000"  # Your election server
KEYPER_BACKEND_URL = "http://localhost:5001"  # Your keyper server
DEFAULT_SPACE_ID = "encrypted-dao.eth"

app = FastAPI(title="Snapshot UI Adapter", version="1.0.0")

# Enable CORS for Snapshot UI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:5173", 
        "http://localhost:8080",
        "http://127.0.0.1:8080"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===================== MODELS =====================

class SpaceModel(BaseModel):
    id: str
    name: str
    about: str = ""
    network: str = "1"
    symbol: str = "VOTE"
    strategies: List[Dict] = []
    admins: List[str] = []
    moderators: List[str] = []
    members: List[str] = []
    filters: Dict = {}
    plugins: Dict = {}

class ProposalCreate(BaseModel):
    space: str
    title: str
    body: str
    choices: List[str]
    start: int
    end: int
    type: str = "single-choice"

class VoteCreate(BaseModel):
    proposal: str
    voter: str
    choice: int
    reason: str = ""
    metadata: Dict = {}

# ===================== BACKEND COMMUNICATION =====================

def call_backend(method: str, endpoint: str, data: dict = None) -> dict:
    """Call our voting backend and handle errors."""
    try:
        url = f"{VOTING_BACKEND_URL}{endpoint}"
        if method == "GET":
            response = requests.get(url, timeout=10)
        elif method == "POST":
            response = requests.post(url, json=data, timeout=10)
        else:
            raise ValueError(f"Unsupported method: {method}")
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Backend error {response.status_code}: {response.text}")
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

@strawberry.type
class VoteType:
    id: str
    voter: str
    created: int
    choice: int
    reason: str = ""
    vp: float = 1.0
    vp_by_strategy: List[float] = strawberry.field(default_factory=list)
    vp_state: str = "final"

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
        where: Optional[str] = None,
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
            
        choices = status_resp.get("choices", ["For", "Against", "Abstain"])
        current_time = int(time.time())
        start_time = current_time - 3600
        end_time = current_time + 3600
        
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
            title="Test Encrypted Proposal",
            body="A test proposal for threshold encrypted voting",
            choices=choices,
            start=start_time,
            end=end_time,
            author="0x" + secrets.token_hex(20),
            created=start_time,
            state="active",
            type="single-choice",
            space=space,
            scores=scores,
            scores_total=sum(scores),
            scores_by_strategy=[scores],
            scores_state="pending"
        )
    
    @strawberry.field 
    def proposals(
        self,
        first: int = 20,
        skip: int = 0, 
        where: Optional[str] = None,
        orderBy: Optional[str] = None,
        orderDirection: Optional[str] = None
    ) -> List[ProposalType]:
        """Get list of proposals"""
        
        # Get current election status
        status_resp = call_backend("GET", "/api/status")
        if not status_resp or not status_resp.get("initialized"):
            return []
        
        space = SpaceType(
            id="encrypted-dao.eth", 
            name="Encrypted DAO",
            symbol="EVOTE"
        )
        
        choices = status_resp.get("choices", ["For", "Against", "Abstain"])
        current_time = int(time.time())
        
        # Create a proposal based on current election
        proposal = ProposalType(
            id="0x" + secrets.token_hex(32),
            title="Encrypted Voting Test",
            body="This is a test proposal using threshold encrypted voting with ElGamal homomorphic encryption.",
            choices=choices,
            start=current_time - 3600,
            end=current_time + 3600, 
            author="0x" + secrets.token_hex(20),
            created=current_time - 3600,
            state="active",
            space=space,
            scores=[10.0, 5.0, 2.0][:len(choices)],  # Mock scores
            scores_total=17.0,
            scores_by_strategy=[[10.0, 5.0, 2.0][:len(choices)]]
        )
            
        return [proposal]
    
    @strawberry.field
    def votes(
        self,
        first: int = 20,
        skip: int = 0,
        where: Optional[str] = None,
        orderBy: Optional[str] = None,
        orderDirection: Optional[str] = None  
    ) -> List[VoteType]:
        """Get list of votes"""
        
        votes_resp = call_backend("GET", "/api/ciphertexts")
        if not votes_resp:
            return []
            
        votes_data = votes_resp.get("data", [])
        
        votes = []
        for vote_data in votes_data[skip:skip+first]:
            vote = VoteType(
                id=vote_data.get("id", "0x" + secrets.token_hex(32)),
                voter=vote_data.get("voter", "0x" + secrets.token_hex(20)),
                created=vote_data.get("created", int(time.time())),
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
        vote_data = {
            "vote": choice,
            "voter": "0x" + secrets.token_hex(20),  # Mock voter
            "reason": reason
        }
        result = call_backend("POST", "/api/vote", vote_data)
        return result is not None

# Create GraphQL schema
schema = strawberry.Schema(query=Query, mutation=Mutation)

# Add GraphQL endpoint
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")

# ===================== REST API ENDPOINTS (Original) =====================

@app.get("/")
async def root():
    """Health check."""
    return {"message": "Snapshot UI Adapter with GraphQL is running", "version": "2.0.0"}

@app.get("/api/spaces/{space_id}")
async def get_space(space_id: str):
    """Get space information."""
    return {
        "id": space_id,
        "name": "Encrypted DAO",
        "about": "A DAO using threshold encrypted voting",
        "network": "1",
        "symbol": "EVOTE",
        "strategies": [{"name": "ticket", "params": {"symbol": "EVOTE"}}],
        "admins": [],
        "moderators": [],
        "members": [],
        "filters": {"minScore": 0, "onlyMembers": False},
        "plugins": {}
    }

@app.get("/api/spaces/{space_id}/proposals")
async def get_proposals(space_id: str, first: int = 20, skip: int = 0):
    """Get proposals for a space."""
    
    status_resp = call_backend("GET", "/api/status")
    if not status_resp or not status_resp.get("initialized"):
        return {"proposals": [], "total": 0}
    
    current_time = int(time.time())
    proposal = {
        "id": "0x" + secrets.token_hex(32),
        "space": {"id": space_id, "name": "Encrypted DAO", "symbol": "EVOTE"},
        "title": "Encrypted Voting Test",
        "body": "This is a test proposal using threshold encrypted voting.",
        "choices": status_resp.get("choices", ["For", "Against", "Abstain"]),
        "start": current_time - 3600,
        "end": current_time + 3600,
        "author": "0x" + secrets.token_hex(20),
        "state": "active",
        "type": "single-choice",
        "scores": [10.0, 5.0, 2.0],
        "scores_total": 17.0,
        "scores_by_strategy": [[10.0, 5.0, 2.0]],
        "scores_state": "pending",
        "quorum": 0,
        "privacy": "shutter"
    }
    
    return {"proposals": [proposal], "total": 1}

@app.post("/api/proposals")
async def create_proposal(proposal: ProposalCreate):
    """Create a new proposal."""
    
    init_data = {
        "num_voters": 100,
        "threshold": 3,
        "num_keypers": 5,
        "voting_mode": "simple" if proposal.type == "single-choice" else "multi_choice",
        "choices": proposal.choices,
        "space_id": proposal.space,
        "proposal_title": proposal.title,
        "proposal_body": proposal.body,
        "proposal_link": None
    }
    
    # Reset and initialize
    call_backend("POST", "/api/reset")
    result = call_backend("POST", "/api/init", init_data)
    
    if not result:
        raise HTTPException(status_code=500, detail="Failed to create proposal")
    
    proposal_id = result.get("proposal_id", "0x" + secrets.token_hex(32))
    
    return {
        "id": proposal_id,
        "space": {"id": proposal.space},
        "title": proposal.title,
        "body": proposal.body,
        "choices": proposal.choices,
        "start": proposal.start,
        "end": proposal.end,
        "author": "0x" + secrets.token_hex(20),
        "state": "active",
        "type": proposal.type
    }

@app.post("/api/votes")
async def cast_vote(vote: VoteCreate):
    """Cast a vote on a proposal."""
    
    status_resp = call_backend("GET", "/api/status")
    if not status_resp or not status_resp.get("initialized"):
        raise HTTPException(status_code=400, detail="No active election")
    
    voting_mode = status_resp.get("voting_mode", "simple")
    
    try:
        if voting_mode == "simple":
            choice_to_vote = {0: -1, 1: 0, 2: 1}
            vote_value = choice_to_vote.get(vote.choice, 1)
            
            vote_data = {
                "vote": vote_value,
                "voter": vote.voter,
                "reason": vote.reason
            }
            result = call_backend("POST", "/api/vote", vote_data)
        else:
            vote_data = {
                "choice": vote.choice,
                "voter": vote.voter,
                "reason": vote.reason
            }
            result = call_backend("POST", "/api/multi_choice_vote", vote_data)
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to cast vote")
        
        return {
            "id": result.get("vote_id", "0x" + secrets.token_hex(32)),
            "voter": vote.voter,
            "created": int(time.time()),
            "proposal": {"id": vote.proposal},
            "choice": vote.choice,
            "metadata": vote.metadata
        }
        
    except Exception as e:
        print(f"Vote casting error: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to cast vote: {str(e)}")

@app.get("/api/status")
async def get_status():
    """Get adapter and backend status."""
    backend_status = call_backend("GET", "/api/status")
    
    return {
        "adapter": "running",
        "graphql": "enabled",
        "backend": "connected" if backend_status else "disconnected",
        "backend_status": backend_status
    }

if __name__ == "__main__":
    import uvicorn
    print("🔌 Starting Enhanced Snapshot UI Adapter...")
    print("🎯 Backend URL:", VOTING_BACKEND_URL)
    print("🌐 Will serve on: http://localhost:4001")
    print("📊 GraphQL endpoint: http://localhost:4001/graphql")
    print("📡 CORS enabled for Snapshot UI")
    
    uvicorn.run(app, host="0.0.0.0", port=4001, log_level="info")
