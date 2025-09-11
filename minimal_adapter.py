#!/usr/bin/env python3
"""
Minimal GraphQL Adapter for Snapshot UI
Simple GraphQL endpoint that mimics Snapshot's API structure for testing.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json
import time
import secrets
import re
from typing import List, Dict, Any, Optional

# Configuration
VOTING_BACKEND_URL = "http://localhost:5000"  # Your election server
DEFAULT_SPACE_ID = "encrypted-dao.eth"

# Consistent addresses for space and proposals - Use known strategy names
SPACE_CONTROLLER = "0x" + secrets.token_hex(20)
VOTING_STRATEGY_ADDRESS = "erc20-balance-of"  # Use well-known strategy name
VALIDATION_STRATEGY_ADDRESS = "0x" + secrets.token_hex(20)
TOKEN_ADDRESS = "0x" + secrets.token_hex(20)

# In-memory storage for proposals (in production, use a database)
proposals_storage = []

app = FastAPI(title="Minimal Snapshot GraphQL Adapter", version="1.0.0")

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
        else:
            print(f"Backend error {response.status_code}: {response.text}")
            return None
    except Exception as e:
        print(f"Backend communication error: {e}")
        return None

@app.post("/graphql")
async def graphql_endpoint(request: dict):
    """Handle GraphQL queries by parsing them and routing to appropriate handlers."""
    
    query = request.get("query", "")
    variables = request.get("variables", {})
    
    print(f"=== GraphQL Request ===")
    print(f"Query: {query}")
    print(f"Variables: {variables}")
    print(f"=======================")
    
    # Parse GraphQL queries and mutations
    if "mutation" in query:
        if "propose(" in query:
            return handle_propose_mutation(query, variables)
        elif "vote(" in query:
            return handle_vote_mutation(query, variables)
    elif "query" in query:
        # More robust parsing - look for the actual GraphQL operation
        if ("spaces(" in query or "spaces {" in query) and "proposals" not in query:
            print(">>> Handling spaces query")
            return handle_spaces_query(variables)
        elif ("proposals(" in query or "proposals {" in query) and "spaces" not in query:
            print(">>> Handling proposals query")
            return handle_proposals_query(variables)
        elif "proposal(" in query:
            print(">>> Handling single proposal query")
            return handle_proposal_query(variables)
        elif "space(" in query:
            print(">>> Handling single space query")
            return handle_space_query(variables)
        elif "user(" in query:
            print(">>> Handling user query")
            return handle_user_query(variables)
        elif "leaderboards(" in query:
            print(">>> Handling leaderboard query")
            return handle_leaderboard_query(variables)
        elif "votes(" in query or "votes {" in query:
            print(">>> Handling votes query")
            return handle_votes_query(variables)
    
    # Default response
    print(">>> Returning default empty response")
    return {
        "data": {
            "spaces": [],
            "proposals": [],
            "votes": []
        }
    }

@app.get("/api/settings")
async def get_settings():
    """Provide settings for Snapshot UI - proposal limits, etc."""
    settings = [
        # Proposal limits per day and month for different space types
        {"name": "space.verified.proposal_limit_per_day", "value": "100"},
        {"name": "space.verified.proposal_limit_per_month", "value": "1000"},
        {"name": "space.default.proposal_limit_per_day", "value": "10"},
        {"name": "space.default.proposal_limit_per_month", "value": "100"},
        {"name": "space.turbo.proposal_limit_per_day", "value": "1000"},
        {"name": "space.turbo.proposal_limit_per_month", "value": "10000"},
        {"name": "space.flagged.proposal_limit_per_day", "value": "1"},
        {"name": "space.flagged.proposal_limit_per_month", "value": "5"},
        {"name": "space.ecosystem.proposal_limit_per_day", "value": "50"},
        {"name": "space.ecosystem.proposal_limit_per_month", "value": "500"},
        
        # Body text limits (character count)
        {"name": "space.verified.body_limit", "value": "10000"},
        {"name": "space.default.body_limit", "value": "5000"},
        {"name": "space.turbo.body_limit", "value": "50000"},
        
        # Choices limits (number of voting options)
        {"name": "space.verified.choices_limit", "value": "20"},
        {"name": "space.default.choices_limit", "value": "10"},
        {"name": "space.turbo.choices_limit", "value": "50"},
        
        # Strategy limits (number of voting strategies)
        {"name": "space.verified.strategies_limit", "value": "10"},
        {"name": "space.default.strategies_limit", "value": "5"},
        {"name": "space.turbo.strategies_limit", "value": "20"},
        
        # Active proposal limits
        {"name": "space.active_proposal_limit_per_author", "value": "10"},
        
        # User limits
        {"name": "user.default.follow_limit", "value": "1000"}
    ]
    return settings

def handle_propose_mutation(query: str, variables: dict):
    """Handle proposal creation mutations"""
    
    # Extract proposal data from the mutation query
    # This is a simple parser - in production you'd use a proper GraphQL parser
    print(f"Propose mutation: {query}")
    
    # Extract basic fields using regex (simple approach for demo)
    space_match = re.search(r'space:\s*"([^"]*)"', query)
    title_match = re.search(r'title:\s*"([^"]*)"', query)
    body_match = re.search(r'body:\s*"([^"]*)"', query)
    type_match = re.search(r'type:\s*"([^"]*)"', query)
    choices_match = re.search(r'choices:\s*\[([^\]]*)\]', query)
    
    space_id = space_match.group(1) if space_match else "encrypted-dao"
    title = title_match.group(1) if title_match else "Untitled Proposal"
    body = body_match.group(1) if body_match else ""
    vote_type = "basic"  # Force to "basic" for voting support
    
    # Parse choices array
    if choices_match:
        choices_str = choices_match.group(1)
        choices = [choice.strip().strip('"') for choice in choices_str.split(',')]
    else:
        choices = ["For", "Against", "Abstain"]
    
    # Create a new proposal
    current_time = int(time.time())
    proposal_id = str(current_time)  # Use timestamp as simple ID
    
    print(f"UI timing values (IGNORED): start={variables.get('start')}, min_end={variables.get('min_end')}, max_end={variables.get('max_end')}")
    print(f"Using correct Unix timestamps: current_time={current_time}, start={current_time - 3600}, min_end={current_time + 86400}")

    proposal_data = {
        "space": space_id,
        "title": title,
        "body": body,
        "type": vote_type,
        "created": current_time,
        "start": current_time - 3600,  # Started 1 hour ago (active now)
        "min_end": current_time + 86400,  # End in 24 hours  
        "max_end": current_time + 172800,  # Max end in 48 hours
    }    # Send to backend for threshold encryption processing
    backend_result = call_backend("POST", "/proposal", proposal_data)
    
    if backend_result:
        print(f"Proposal sent to backend: {backend_result}")
    else:
        print("Failed to send proposal to backend")
    
    # Create the full proposal object for storage - match GraphQL proposalFields fragment
    proposal_hex_id = "0x" + secrets.token_hex(32)
    full_proposal = {
        "id": proposal_hex_id,  # Use hex ID like real Snapshot
        "proposal_id": int(proposal_id),
        "space": {
            "id": space_id,
            "_indexer": "eth",
            "protocol": "1.0.0",
            "verified": True,
            "turbo": False,
            "metadata": {
                "name": "Encrypted DAO",
                "avatar": "",
                "cover": "",
                "about": "A DAO using threshold encrypted voting with ElGamal homomorphic encryption",
                "external_url": "",
                "github": "",
                "twitter": "",
                "discord": "",
                "farcaster": "",
                "voting_power_symbol": "EVOTE",
                "treasuries": [],
                "labels": [],
                "delegations": [],
                "executors": [],
                "executors_types": [],
                "executors_destinations": [],
                "executors_strategies": []
            },
            "controller": SPACE_CONTROLLER,
            "voting_delay": 0,
            "min_voting_period": 3600,
            "max_voting_period": 86400,
            "proposal_threshold": "0",
            "validation_strategy": VALIDATION_STRATEGY_ADDRESS,
            "validation_strategy_params": "0x",
            "voting_power_validation_strategy_strategies": [VOTING_STRATEGY_ADDRESS],
            "voting_power_validation_strategy_strategies_params": ["0x"],
            "voting_power_validation_strategies_parsed_metadata": [
                {
                    "index": 0,
                    "data": {
                        "id": VOTING_STRATEGY_ADDRESS,
                        "name": "Encrypted Vote Token",
                        "description": "Token for encrypted voting",
                        "decimals": 18,
                        "symbol": "EVOTE",
                        "token": TOKEN_ADDRESS,
                        "payload": "{}"
                    }
                }
            ],
            "strategies_indices": [0],
            "strategies": [VOTING_STRATEGY_ADDRESS],
            "strategies_params": [f'{{"address":"{TOKEN_ADDRESS}","symbol":"EVOTE","decimals":18}}'],
            "strategies_parsed_metadata": [
                {
                    "index": 0,
                    "data": {
                        "id": VOTING_STRATEGY_ADDRESS,
                        "name": "ERC20 Balance Of",
                        "description": "Returns the balance of an ERC20 token",
                        "decimals": 18,
                        "symbol": "EVOTE",
                        "token": TOKEN_ADDRESS,
                        "payload": f'{{"address":"{TOKEN_ADDRESS}","symbol":"EVOTE","decimals":18}}'
                    }
                }
            ],
            "authenticators": ["0x" + secrets.token_hex(20)],
            "proposal_count": 1,
            "vote_count": 0,
            "created": current_time - 86400
        },
        "author": {
            "id": "0x0000000000000000000000000000000000000000",
            "address_type": 1
        },
        "quorum": "0",
        "execution_hash": "",
        "metadata": {
            "id": proposal_id,
            "title": title,
            "body": body,
            "discussion": "",
            "execution": "",
            "choices": choices,
            "labels": []
        },
        "start": 23339712,      # Last finalized Ethereum block (Sep 2025)
        "min_end": 23339812,    # Future block for min end (about 20 minutes later)
        "max_end": 23340012,    # Future block for max end (about 1 hour later)
        "snapshot": 23339662,   # Snapshot block (50 blocks earlier than start)
        "state": "active",  # Explicitly set state as active
        "vp_decimals": 18,
        "scores_1": "0",
        "scores_2": "0", 
        "scores_3": "0",
        "scores_total": "0",
        "execution_time": 0,
        "execution_strategy": "0x0000000000000000000000000000000000000000",
        "execution_strategy_details": {
            "id": "0x0000000000000000000000000000000000000000",
            "address": "0x0000000000000000000000000000000000000000",
            "destination_address": "0x0000000000000000000000000000000000000000",
            "type": "none",
            "treasury_chain": 1,
            "treasury": "0x0000000000000000000000000000000000000000",
            "quorum": "0"
        },
        "execution_strategy_type": "none",
        "execution_destination": "0x0000000000000000000000000000000000000000",
        "treasuries": [],
        "timelock_veto_guardian": "0x0000000000000000000000000000000000000000",
        "strategies_indices": [0],
        "strategies": [VOTING_STRATEGY_ADDRESS],  # Must match space strategies
        "strategies_params": [f'{{"address":"{TOKEN_ADDRESS}","symbol":"EVOTE","decimals":18}}'],
        "created": int(time.time()),  # Current Unix timestamp (Sep 2025)
        "edited": 0,
        "tx": "0x" + secrets.token_hex(32),
        "execution_tx": "",
        "veto_tx": "",
        "vote_count": 0,
        "execution_ready": False,
        "executed": False,
        "vetoed": False,
        "execution_settled": False,
        "cancelled": False
    }
    
    # DEBUG: Print the actual timing values being stored
    print(f">>> STORED TIMING VALUES (Last finalized Sep 2025 block numbers for eth network):")
    print(f"    current_time: {current_time}")
    print(f"    start: 23339712 (last finalized block - Sep 2025)")
    print(f"    min_end: 23339812 (future block - ~20 min later)") 
    print(f"    max_end: 23340012 (future block - ~1 hr later)")
    print(f"    created: {int(time.time())} (current Unix timestamp for created)")
    print(f"    snapshot: 23339662 (snapshot block - 50 blocks ago)")
    
    # Store the proposal in memory
    proposals_storage.append(full_proposal)
    print(f"Stored proposal: {proposal_id}")
    
    # Return success response
    return {
        "data": {
            "propose": {
                "id": proposal_id,
                "txHash": "0x" + secrets.token_hex(32)  # Mock transaction hash
            }
        }
    }

def handle_user_query(variables: dict):
    """Handle user query - return default user data"""
    user_id = variables.get("id", "")
    return {
        "data": {
            "user": {
                "id": user_id,
                "proposal_count": 0,
                "vote_count": 0,
                "created": int(time.time()) - 86400
            }
        }
    }

def handle_leaderboard_query(variables: dict):
    """Handle leaderboard query - return empty leaderboard"""
    return {
        "data": {
            "leaderboards": []
        }
    }

def handle_vote_mutation(query, variables):
    """Handle vote mutations"""
    
    print(f"Vote mutation: {query}")

    # Extract vote data from the mutation query
    proposal_match = re.search(r'proposal:\s*"([^"]*)"', query)
    choice_match = re.search(r'choice:\s*(\d+)', query)
    reason_match = re.search(r'reason:\s*"([^"]*)"', query)

    proposal_id = proposal_match.group(1) if proposal_match else ""
    choice = int(choice_match.group(1)) if choice_match else 0
    reason = reason_match.group(1) if reason_match else ""

    print(f"Vote - Proposal: {proposal_id}, Choice: {choice}, Reason: {reason}")

    # Create vote data for the backend
    vote_data = {
        "proposal_id": proposal_id,
        "choice": choice,
        "reason": reason
    }
    
    # Send vote to backend for threshold encryption processing
    backend_result = call_backend("POST", "/vote", vote_data)
    
    if backend_result:
        print(f"Vote sent to backend: {backend_result}")
    else:
        print("Failed to send vote to backend")
    
    # Return success response
    return {
        "data": {
            "vote": {
                "id": "0x" + secrets.token_hex(32),  # Mock vote ID
                "txHash": "0x" + secrets.token_hex(32)  # Mock transaction hash
            }
        }
    }

def handle_spaces_query(variables: dict):
    """Handle spaces query - matches Snapshot's exact GraphQL schema"""
    current_time = int(time.time())
    
    space = {
        "id": "encrypted-dao",
        "_indexer": "eth",  # Use the network indexer, not the space name
        "protocol": "1.0.0",
        "verified": True,  # Mark as verified to allow proposal creation
        "turbo": False,
        "metadata": {
            "name": "Encrypted DAO",
            "avatar": "",
            "cover": "",
            "about": "A DAO using threshold encrypted voting with ElGamal homomorphic encryption",
            "external_url": "",
            "github": "",
            "twitter": "",
            "discord": "",
            "farcaster": "",
            "voting_power_symbol": "EVOTE",
            "treasuries": [],
            "labels": [],
            "delegations": [],
            "executors": [],
            "executors_types": [],
            "executors_destinations": [],
            "executors_strategies": [],
            "proposal_validation": {
                "params": {
                    "maxProposalsPerDay": 100,
                    "maxProposalsPerMonth": 1000
                }
            }
        },
        "controller": "0x" + secrets.token_hex(20),
        "voting_delay": 0,
        "min_voting_period": 3600,  # 1 hour
        "max_voting_period": 86400,  # 24 hours
        "proposal_threshold": "0",
        "validation_strategy": "0x" + secrets.token_hex(20),
        "validation_strategy_params": "0x",
        "voting_power_validation_strategy_strategies": ["0x" + secrets.token_hex(20)],
        "voting_power_validation_strategy_strategies_params": ["0x"],
        "voting_power_validation_strategies_parsed_metadata": [
            {
                "index": 0,
                "data": {
                    "id": "0x" + secrets.token_hex(20),
                    "name": "Encrypted Vote Token",
                    "description": "Token for encrypted voting",
                    "decimals": 18,
                    "symbol": "EVOTE",
                    "token": "0x" + secrets.token_hex(20),
                    "payload": "{}"
                }
            }
        ],
        "strategies_indices": [0],
        "strategies": ["0x" + secrets.token_hex(20)],
        "strategies_params": ["0x"],
        "strategies_parsed_metadata": [
            {
                "index": 0,
                "data": {
                    "id": "0x" + secrets.token_hex(20),
                    "name": "Encrypted Vote Token",
                    "description": "Token for encrypted voting",
                    "decimals": 18,
                    "symbol": "EVOTE",
                    "token": "0x" + secrets.token_hex(20),
                    "payload": "{}"
                }
            }
        ],
        "authenticators": ["0x" + secrets.token_hex(20)],
        "proposal_count": 1,
        "vote_count": 0,
        "created": current_time - 86400,  # Created 1 day ago
        "proposal_count_1d": 0,  # Number of proposals created in last 24 hours
        "proposal_count_30d": 0  # Number of proposals created in last 30 days
    }
    
    return {
        "data": {
            "spaces": [space]
        }
    }

def handle_space_query(variables: dict):
    """Handle single space query - matches Snapshot's exact GraphQL schema"""
    space_id = variables.get("id", "encrypted-dao")
    current_time = int(time.time())
    
    space = {
        "id": space_id,
        "_indexer": "eth",  # Use the network indexer, not the space name
        "protocol": "1.0.0",
        "verified": True,  # Mark as verified to allow proposal creation
        "turbo": False,
        "metadata": {
            "name": "Encrypted DAO",
            "avatar": "",
            "cover": "",
            "about": "A DAO using threshold encrypted voting with ElGamal homomorphic encryption",
            "external_url": "",
            "github": "",
            "twitter": "",
            "discord": "",
            "farcaster": "",
            "voting_power_symbol": "EVOTE",
            "treasuries": [],
            "labels": [],
            "delegations": [],
            "executors": [],
            "executors_types": [],
            "executors_destinations": [],
            "executors_strategies": [],
            "proposal_validation": {
                "params": {
                    "maxProposalsPerDay": 100,
                    "maxProposalsPerMonth": 1000
                }
            }
        },
        "controller": "0x" + secrets.token_hex(20),
        "voting_delay": 0,
        "min_voting_period": 3600,
        "max_voting_period": 86400,
        "proposal_threshold": "0",
        "validation_strategy": "0x" + secrets.token_hex(20),
        "validation_strategy_params": "0x",
        "voting_power_validation_strategy_strategies": ["0x" + secrets.token_hex(20)],
        "voting_power_validation_strategy_strategies_params": ["0x"],
        "voting_power_validation_strategies_parsed_metadata": [
            {
                "index": 0,
                "data": {
                    "id": "0x" + secrets.token_hex(20),
                    "name": "Encrypted Vote Token",
                    "description": "Token for encrypted voting",
                    "decimals": 18,
                    "symbol": "EVOTE",
                    "token": "0x" + secrets.token_hex(20),
                    "payload": "{}"
                }
            }
        ],
        "strategies_indices": [0],
        "strategies": ["0x" + secrets.token_hex(20)],
        "strategies_params": ["0x"],
        "strategies_parsed_metadata": [
            {
                "index": 0,
                "data": {
                    "id": "0x" + secrets.token_hex(20),
                    "name": "Encrypted Vote Token",
                    "description": "Token for encrypted voting",
                    "decimals": 18,
                    "symbol": "EVOTE",
                    "token": "0x" + secrets.token_hex(20),
                    "payload": "{}"
                }
            }
        ],
        "authenticators": ["0x" + secrets.token_hex(20)],
        "proposal_count": 1,
        "vote_count": 0,
        "created": current_time - 86400,
        "proposal_count_1d": 0,  # Number of proposals created in last 24 hours
        "proposal_count_30d": 0  # Number of proposals created in last 30 days
    }
    
    return {
        "data": {
            "space": space
        }
    }

def handle_proposals_query(variables: dict):
    """Handle proposals query - return stored proposals"""
    
    print(f">>> Proposals query called with variables: {variables}")
    print(f">>> Currently stored proposals: {len(proposals_storage)}")
    for i, proposal in enumerate(proposals_storage):
        title = proposal.get('metadata', {}).get('title', 'Untitled')
        space_id = proposal.get('space', {}).get('id', 'unknown')
        print(f"    {i+1}. {title} (ID: {proposal.get('id', 'unknown')}) (Space: {space_id})")
    
    # Apply filters from the where clause
    filtered_proposals = proposals_storage
    where_clause = variables.get('where', {})
    
    if 'space_in' in where_clause:
        space_ids = where_clause['space_in']
        print(f">>> Filtering by space_in: {space_ids}")
        filtered_proposals = [p for p in filtered_proposals if p.get('space', {}).get('id') in space_ids]
        print(f">>> After space filter: {len(filtered_proposals)} proposals")
    
    if 'cancelled' in where_clause:
        cancelled_filter = where_clause['cancelled']
        print(f">>> Filtering by cancelled: {cancelled_filter}")
        # Assuming we don't have cancelled field, all proposals are not cancelled
        if not cancelled_filter:
            # Only include non-cancelled proposals (which is all of them since we don't track cancelled)
            pass
    
    # Apply pagination
    first = variables.get('first', 10)
    skip = variables.get('skip', 0)
    
    paginated_proposals = filtered_proposals[skip:skip + first]
    
    print(f">>> Final result: {len(paginated_proposals)} proposals (after filters and pagination)")
    
    # Debug: Print the proposal data being returned
    for i, proposal in enumerate(paginated_proposals):
        title = proposal.get('metadata', {}).get('title', 'Untitled')
        print(f"    Returning proposal {i+1}: {title} (ID: {proposal.get('id')})")
    
    # Return filtered proposals
    result = {"data": {"proposals": paginated_proposals}}
    return result

def handle_proposal_query(variables: dict):
    """Handle single proposal query - find and return the stored proposal"""
    
    proposal_id = variables.get("id", "")
    print(f">>> Single proposal query for ID: {proposal_id}")
    
    # Extract the actual proposal ID from the format "space_id/proposal_id"
    if "/" in proposal_id:
        space_id, actual_id = proposal_id.split("/", 1)
    else:
        actual_id = proposal_id
    
    print(f">>> Looking for proposal with ID: {actual_id}")
    print(f">>> Currently stored proposals: {len(proposals_storage)}")
    
    # Debug: show all stored proposal IDs
    for i, proposal in enumerate(proposals_storage):
        print(f"    {i+1}. {proposal.get('metadata', {}).get('title', 'Untitled')} (full_id: {proposal.get('id')}) (proposal_id: {proposal.get('proposal_id')})")
    
    # Find the proposal in storage - check multiple ID formats
    found_proposal = None
    for proposal in proposals_storage:
        prop_full_id = proposal.get("id", "")
        prop_numeric_id = str(proposal.get("proposal_id", ""))
        
        # Check if IDs match in any format:
        # - Direct hex ID match
        # - Legacy space/numeric format 
        # - Numeric ID match
        if (prop_full_id == proposal_id or 
            prop_numeric_id == actual_id or
            f"encrypted-dao/{prop_numeric_id}" == proposal_id or
            prop_full_id.endswith(f"/{actual_id}")):
            found_proposal = proposal
            break
    
    if found_proposal:
        print(f">>> Found proposal: {found_proposal.get('metadata', {}).get('title', 'Untitled')}")
        return {"data": {"proposal": found_proposal}}
    else:
        print(f">>> Proposal not found with ID: {actual_id}")
        return {"data": {"proposal": None}}
    
    return {"data": {"proposal": proposal}}

def handle_votes_query(variables: dict):
    """Handle votes query"""
    
    votes_resp = call_backend("GET", "/api/ciphertexts")
    if not votes_resp:
        return {"data": {"votes": []}}
    
    votes_data = votes_resp.get("data", [])
    
    votes = []
    for vote_data in votes_data:
        vote = {
            "id": vote_data.get("id", "0x" + secrets.token_hex(32)),
            "voter": vote_data.get("voter", "0x" + secrets.token_hex(20)),
            "created": vote_data.get("created", int(time.time())),
            "choice": vote_data.get("choice", 1),
            "reason": vote_data.get("reason", ""),
            "vp": 1.0,
            "vp_by_strategy": [1.0],
            "vp_state": "final",
            "proposal": {
                "id": "0x" + secrets.token_hex(32)
            }
        }
        votes.append(vote)
    
    return {"data": {"votes": votes}}

@app.get("/")
async def root():
    """Health check."""
    return {
        "message": "Minimal GraphQL Adapter is running", 
        "version": "1.0.0",
        "graphql_endpoint": "/graphql"
    }

@app.get("/status")
async def get_status():
    """Get adapter and backend status."""
    backend_status = call_backend("GET", "/api/status")
    
    return {
        "adapter": "running",
        "graphql": "enabled",
        "backend": "connected" if backend_status else "disconnected",
        "backend_status": backend_status
    }

# Optional: Keep some REST endpoints for direct testing
@app.post("/api/votes")
async def cast_vote_rest(vote_data: dict):
    """REST endpoint for casting votes (for testing)"""
    
    status_resp = call_backend("GET", "/api/status")
    if not status_resp or not status_resp.get("initialized"):
        raise HTTPException(status_code=400, detail="No active election")
    
    try:
        # Simple vote casting
        choice_to_vote = {0: -1, 1: 0, 2: 1}  # Map UI choices to backend values
        vote_value = choice_to_vote.get(vote_data.get("choice", 1), 1)
        
        backend_vote_data = {
            "vote": vote_value,
            "voter": vote_data.get("voter", "0x" + secrets.token_hex(20)),
            "reason": vote_data.get("reason", "")
        }
        
        result = call_backend("POST", "/api/vote", backend_vote_data)
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to cast vote")
        
        return {
            "id": result.get("vote_id", "0x" + secrets.token_hex(32)),
            "voter": vote_data.get("voter"),
            "created": int(time.time()),
            "choice": vote_data.get("choice"),
            "success": True
        }
        
    except Exception as e:
        print(f"Vote casting error: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to cast vote: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    print("🔌 Starting Minimal GraphQL Adapter...")
    print("🎯 Backend URL:", VOTING_BACKEND_URL)
    print("🌐 Will serve on: http://localhost:4001")
    print("📊 GraphQL endpoint: http://localhost:4001/graphql")
    print("📡 CORS enabled for Snapshot UI")
    
    uvicorn.run(app, host="0.0.0.0", port=4001, log_level="info")
