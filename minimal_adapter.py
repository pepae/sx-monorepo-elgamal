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
import sys
import os
from typing import List, Dict, Any, Optional

# Import ElGamal crypto functions from local crypto module
try:
    from crypto.elgamal import encrypt, prove_discrete_log_or, setup_elgamal
    print("✅ Successfully imported ElGamal crypto functions from local crypto module")
except ImportError as e:
    print(f"Warning: Could not import ElGamal crypto: {e}")
    print("Make sure the crypto directory is accessible")
    # Define dummy functions for development
    def encrypt(p, g, h, m): return 1, 1, 1
    def prove_discrete_log_or(*args): return []
    def setup_elgamal(): return 1, 1

# Configuration
ELECTION_SERVER_URL = "http://localhost:5000"  # ElGamal election server
KEYPER_SERVER_URL = "http://localhost:5001"    # Keyper threshold server
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
    """Call our election backend and handle errors."""
    try:
        url = f"{ELECTION_SERVER_URL}{endpoint}"
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

    # Initialize ElGamal election for this proposal
    print(f"🔐 Initializing ElGamal election for proposal: {title}")
    
    # First check if election server is available
    status_check = call_backend("GET", "/api/status")
    if not status_check:
        print(f"❌ ElGamal election server not available")
        # Continue with non-encrypted proposal
    else:
        print(f"✅ ElGamal election server is available")
        
        # Try to initialize a simple election
        try:
            init_result = call_backend("POST", "/api/init", {})
            
            if init_result and init_result.get("status") == "ok":
                print(f"✅ ElGamal election initialized successfully")
                print(f"🔑 Public key available for voting")
            else:
                print(f"❌ Failed to initialize ElGamal election: {init_result}")
        except Exception as e:
            print(f"❌ Error initializing ElGamal election: {e}")
    
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
        "max_end": 23550012,    # Future block for max end (about 1 hour later)
        "snapshot": 23339662,   # Snapshot block (50 blocks earlier than start)
        "state": "active",  # Explicitly set state as active
        "vp_decimals": 18,
        "scores": [0, 0, 0],  # Initialize scores array [For, Against, Abstain] - will be in wei
        "scores_1": "0",
        "scores_2": "0", 
        "scores_3": "0",
        "scores_total": "0",
        "scores_state": "pending",  # Set initial scores state as pending
        "scores_by_strategy": [[0, 0, 0]],  # Initialize scores_by_strategy to match scores
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
        "cancelled": False,
        "privacy": "shutter"
    }
    
    # DEBUG: Print the actual timing values being stored
    print(f">>> STORED TIMING VALUES (Last finalized Sep 2025 block numbers for eth network):")
    print(f"    current_time: {current_time}")
    print(f"    start: 23339712 (last finalized block - Sep 2025)")
    print(f"    min_end: 23339812 (future block - ~20 min later)") 
    print(f"    max_end: 23350012 (future block - ~1 hr later)")
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
    choice_match = re.search(r'choice:\s*(\w+)', query)  # Changed to capture words like "for"
    reason_match = re.search(r'reason:\s*"([^"]*)"', query)

    proposal_id = proposal_match.group(1) if proposal_match else ""
    choice_str = choice_match.group(1) if choice_match else "for"
    reason = reason_match.group(1) if reason_match else ""

    # Convert choice string to number
    choice_map = {"for": 1, "against": 2, "abstain": 3}
    choice = choice_map.get(choice_str.lower(), 1)  # Default to 1 (for)

    print(f"Vote - Proposal: {proposal_id}, Choice: {choice} ({choice_str}), Reason: {reason}")

    # Initialize votes storage if it doesn't exist
    global votes
    if "votes" not in globals():
        votes = []
    
    # Convert choice to simple vote value for ElGamal (-1, 0, 1)
    # choice 1 = For (vote 1), choice 2 = Against (vote -1), choice 3 = Abstain (vote 0)
    vote_value_map = {1: 1, 2: -1, 3: 0}
    vote_value = vote_value_map.get(choice, 1)  # Default to 1 (for)
    
    voter_address = "0x1234567890123456789012345678901234567890"  # Mock voter address
    
    print(f"🔐 Encrypting vote from {voter_address} on proposal {proposal_id}")
    print(f"Choice {choice} ({choice_str}) -> ElGamal vote value: {vote_value}")

    # Get ElGamal parameters from election server
    params_result = call_backend("GET", "/api/params")
    if not params_result or "p" not in params_result:
        print(f"❌ Failed to get ElGamal parameters: {params_result}")
        # Fall back to unencrypted vote
        encrypted_vote_data = {"vote_value": vote_value, "encrypted": False}
    else:
        print(f"📊 Got ElGamal parameters: p={params_result.get('p')}, g={params_result.get('g')}, h={params_result.get('h')}")
        
        try:
            # Encrypt the vote using ElGamal
            p = int(params_result["p"])
            g = int(params_result["g"])
            h = int(params_result["h"])
            
            # Encrypt the vote value
            c1, c2, r = encrypt(p, g, h, vote_value)
            
            # Generate zero-knowledge proof that vote is in {-1, 0, 1}
            proof = prove_discrete_log_or(p, g, h, c1, c2, vote_value, r, [-1, 0, 1])
            
            encrypted_vote_data = {
                "c1": str(c1),
                "c2": str(c2),
                "proof": proof,
                "vote_value": vote_value,  # Store for verification
                "encrypted": True
            }
            
            print(f"✅ Vote encrypted with zero-knowledge proof")
            
        except Exception as e:
            print(f"❌ Encryption failed: {e}")
            # Fall back to unencrypted vote
            encrypted_vote_data = {"vote_value": vote_value, "encrypted": False}
    
    # Submit encrypted vote to election server
    if encrypted_vote_data.get("encrypted", False):
        # Only submit to ElGamal server if encryption succeeded
        submit_data = {
            "c1": encrypted_vote_data.get("c1"),
            "c2": encrypted_vote_data.get("c2"),
            "proof": encrypted_vote_data.get("proof"),
            "voter": voter_address,
            "reason": reason
        }
        
        # Ensure all required fields are present and not None
        if all(key in submit_data and submit_data[key] is not None for key in ["c1", "c2", "proof"]):
            vote_result = call_backend("POST", "/api/vote", submit_data)
            if vote_result and vote_result.get("status") == "ok":
                print(f"✅ Encrypted vote submitted to election server")
            else:
                print(f"❌ Failed to submit vote to election server: {vote_result}")
        else:
            print(f"❌ Invalid vote data - missing required fields: {submit_data}")
    else:
        print(f"⚠️ Skipping ElGamal submission - encryption not available")
    
    # Allow multiple votes - no duplicate checking
    # Each vote will be counted and added to the tally
    voter_address = "0x1234567890123456789012345678901234567890"  # Mock voter address
    
    print(f"Processing new vote from {voter_address} on proposal {proposal_id}")

    # Set voting power with proper decimals (18 decimals like the vp_decimals field)
    voting_power = 10**18  # 1 token with 18 decimals = 1000000000000000000 wei
    
    # Store vote in memory
    vote_id = "0x" + secrets.token_hex(32)
    vote_data = {
        "id": vote_id,
        "proposal_id": proposal_id,
        "choice": choice,
        "reason": reason,
        "voter": "0x1234567890123456789012345678901234567890",  # Mock voter address
        "vp": voting_power,  # Voting power
        "created": int(time.time())
    }
    
    # Store in global votes list
    votes.append(vote_data)
    
    # Update proposal vote counts
    global proposals_storage
    found_proposal = None
    
    # Extract the actual proposal ID from the format "space_id/proposal_id" if needed
    if "/" in proposal_id:
        space_id, actual_id = proposal_id.split("/", 1)
    else:
        actual_id = proposal_id
    
    print(f"Looking for proposal with ID: {actual_id} (from full ID: {proposal_id})")
    
    # Find the proposal using flexible ID matching
    for proposal in proposals_storage:
        prop_full_id = proposal.get("id", "")
        prop_numeric_id = str(proposal.get("proposal_id", ""))
        
        # Check if IDs match in any format
        if (prop_full_id == proposal_id or 
            prop_numeric_id == actual_id or
            f"encrypted-dao/{prop_numeric_id}" == proposal_id or
            prop_full_id.endswith(f"/{actual_id}")):
            found_proposal = proposal
            break
    
    if found_proposal:
        print(f"Found proposal: {found_proposal.get('metadata', {}).get('title', 'Untitled')}")
        
        # Initialize scores array if it doesn't exist
        if "scores" not in found_proposal:
            found_proposal["scores"] = [0, 0, 0]  # [For, Against, Abstain]
        
        # Update scores using voting power (choice 1 = For, choice 2 = Against, choice 3 = Abstain)
        if choice == 1:
            found_proposal["scores"][0] += voting_power
            found_proposal["scores_1"] = str(int(found_proposal["scores"][0]))  # Ensure it's a positive integer string
        elif choice == 2:
            found_proposal["scores"][1] += voting_power
            found_proposal["scores_2"] = str(int(found_proposal["scores"][1]))  # Ensure it's a positive integer string
        elif choice == 3:
            found_proposal["scores"][2] += voting_power
            found_proposal["scores_3"] = str(int(found_proposal["scores"][2]))  # Ensure it's a positive integer string
        
        # Update total score, vote count, and scores_by_strategy
        found_proposal["scores_total"] = str(sum(found_proposal["scores"]))
        found_proposal["vote_count"] = found_proposal.get("vote_count", 0) + 1
        found_proposal["scores_by_strategy"] = [found_proposal["scores"]]  # Update scores_by_strategy to match scores
        found_proposal["edited"] = int(time.time())  # Update edited timestamp to force UI refresh
        
        # Ensure all score fields are properly set and consistent
        found_proposal["scores_1"] = str(int(found_proposal["scores"][0])) if found_proposal["scores"][0] >= 0 else "0"
        found_proposal["scores_2"] = str(int(found_proposal["scores"][1])) if found_proposal["scores"][1] >= 0 else "0" 
        found_proposal["scores_3"] = str(int(found_proposal["scores"][2])) if found_proposal["scores"][2] >= 0 else "0"
        
        print(f"Updated proposal {proposal_id} scores: {found_proposal['scores']} (VP: {voting_power})")
        print(f"Vote count: {found_proposal['vote_count']}")
        print(f"Scores total: {found_proposal['scores_total']}")
        print(f"Scores by strategy: {found_proposal['scores_by_strategy']}")
        print(f"Individual score fields: scores_1={found_proposal.get('scores_1')}, scores_2={found_proposal.get('scores_2')}, scores_3={found_proposal.get('scores_3')}")
        print(f"DEBUG: Full proposal scores data:")
        print(f"  scores array: {found_proposal.get('scores')}")
        print(f"  scores_total: {found_proposal.get('scores_total')}")
        print(f"  scores_state: {found_proposal.get('scores_state', 'missing')}")
        print(f"  vote_count: {found_proposal.get('vote_count')}")
    else:
        print(f"ERROR: Proposal not found with ID: {proposal_id} (actual_id: {actual_id})")
        print(f"Available proposals:")
        for i, proposal in enumerate(proposals_storage):
            print(f"  {i+1}. ID: {proposal.get('id')}, proposal_id: {proposal.get('proposal_id')}, title: {proposal.get('metadata', {}).get('title', 'Untitled')}")

    # Note: ElGamal encrypted vote was already submitted above if encryption succeeded
    
    # Add minimal delay to simulate transaction processing
    import time as time_module
    time_module.sleep(0.1)  # Reduced to 0.1 seconds
    
    # Return success response
    return {
        "data": {
            "vote": {
                "id": vote_id,
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
        
        # Ensure all critical fields are present for the UI calculation
        # The UI might be using these fields even if not explicitly requested in GraphQL
        if "scores" not in found_proposal:
            found_proposal["scores"] = [0, 0, 0]
        if "scores_state" not in found_proposal:
            found_proposal["scores_state"] = "pending"
        if "state" not in found_proposal:
            found_proposal["state"] = "active"
            
        # Ensure scores_by_strategy is properly formatted
        if "scores_by_strategy" not in found_proposal:
            found_proposal["scores_by_strategy"] = [found_proposal["scores"]]
            
        # Debug: Print what we're returning to the UI
        print(f">>> Returning proposal data:")
        print(f"    scores: {found_proposal.get('scores')}")
        print(f"    scores_1: {found_proposal.get('scores_1')}")
        print(f"    scores_2: {found_proposal.get('scores_2')}")
        print(f"    scores_3: {found_proposal.get('scores_3')}")
        print(f"    scores_total: {found_proposal.get('scores_total')}")
        print(f"    scores_state: {found_proposal.get('scores_state')}")
        print(f"    state: {found_proposal.get('state')}")
        print(f"    vote_count: {found_proposal.get('vote_count')}")
        
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

@app.post("/api/end_voting/{proposal_id}")
async def end_voting(proposal_id: str):
    """Manually end voting for a proposal and trigger tallying"""
    
    print(f">>> Manual end voting triggered for proposal: {proposal_id}")
    
    # Find the proposal in storage
    found_proposal = None
    for proposal in proposals_storage:
        prop_full_id = proposal.get("id", "")
        prop_numeric_id = str(proposal.get("proposal_id", ""))
        
        # Check if IDs match in any format
        if (prop_full_id == proposal_id or 
            prop_numeric_id == proposal_id or
            f"encrypted-dao/{prop_numeric_id}" == proposal_id):
            found_proposal = proposal
            break
    
    if not found_proposal:
        raise HTTPException(status_code=404, detail=f"Proposal {proposal_id} not found")
    
    # Trigger ElGamal threshold decryption to reveal results
    print(f"🔐 Triggering threshold decryption for proposal {proposal_id}")
    
    try:
        # First check if there are votes to decrypt
        votes_check = call_backend("GET", "/api/ciphertexts")
        if not votes_check or not votes_check.get("data"):
            print(f"⚠️ No encrypted votes found, skipping threshold decryption")
            final_tally = found_proposal.get("scores", [0, 0, 0])
        else:
            print(f"📊 Found {len(votes_check.get('data', []))} encrypted votes")
            
            # Call election server to finalize and decrypt votes
            finalize_result = call_backend("GET", "/api/finalize")
            
            if finalize_result and finalize_result.get("status") == "ok":
                print(f"✅ Threshold decryption completed!")
                
                # Get the decrypted result
                final_result = finalize_result.get("result", 0)
                total_votes = finalize_result.get("total_votes", 0)
                valid_votes = finalize_result.get("valid_votes", 0)
                
                print(f"📊 Decrypted result: {final_result}")
                print(f"📊 Total votes: {total_votes}, Valid votes: {valid_votes}")
                
                # Convert simple vote result to choice tallies
                # Simple voting: result > 0 = majority For, result < 0 = majority Against, result = 0 = tie
                if final_result > 0:
                    # More For votes
                    final_tally = [abs(final_result) * (10**18), 0, 0]  # Put all positive result in "For"
                elif final_result < 0:
                    # More Against votes  
                    final_tally = [0, abs(final_result) * (10**18), 0]  # Put all negative result in "Against"
                else:
                    # Tie or all abstain
                    final_tally = [0, 0, total_votes * (10**18)]  # Put in "Abstain"
                    
            else:
                print(f"❌ Threshold decryption failed: {finalize_result}")
                # Fall back to current local vote counts
                final_tally = found_proposal.get("scores", [0, 0, 0])
                
    except Exception as e:
        print(f"❌ Error during threshold decryption: {e}")
        # Fall back to current local vote counts
        final_tally = found_proposal.get("scores", [0, 0, 0])
    
    # Update proposal state to "closed" and mark scores as final
    current_time = int(time.time())
    # Use block numbers that are in the past (earlier than start block)
    past_block = 23339700  # Block number before the start block (23339712)
    found_proposal.update({
        "state": "closed",
        "scores_state": "final",
        "scores": final_tally,
        "scores_1": str(final_tally[0]),
        "scores_2": str(final_tally[1]) if len(final_tally) > 1 else "0",
        "scores_3": str(final_tally[2]) if len(final_tally) > 2 else "0",
        "scores_total": str(sum(final_tally)),
        "scores_by_strategy": [final_tally],
        "min_end": past_block,  # Set end block to past so it shows as ended
        "max_end": past_block,
        "edited": current_time,  # Force UI refresh
        "execution_ready": True,  # Mark as ready for execution if needed
    })
    
    print(f">>> Voting ended for proposal: {found_proposal.get('metadata', {}).get('title', 'Untitled')}")
    print(f">>> Final tally: {final_tally}")
    print(f">>> State: {found_proposal['state']}")
    print(f">>> Scores state: {found_proposal['scores_state']}")
    
    return {
        "success": True,
        "proposal_id": proposal_id,
        "state": "closed",
        "final_tally": final_tally,
        "scores_total": sum(final_tally),
        "message": f"Voting ended for proposal {proposal_id}"
    }

@app.get("/api/proposals")
async def list_proposals_rest():
    """REST endpoint to list all proposals (for testing/debugging)"""
    
    proposals_list = []
    for proposal in proposals_storage:
        proposals_list.append({
            "id": proposal.get("id"),
            "proposal_id": proposal.get("proposal_id"),
            "title": proposal.get("metadata", {}).get("title", "Untitled"),
            "state": proposal.get("state", "active"),
            "scores": proposal.get("scores", [0, 0, 0]),
            "scores_state": proposal.get("scores_state", "pending"),
            "vote_count": proposal.get("vote_count", 0),
            "created": proposal.get("created"),
            "min_end": proposal.get("min_end"),
            "max_end": proposal.get("max_end")
        })
    
    return {
        "proposals": proposals_list,
        "count": len(proposals_list)
    }

if __name__ == "__main__":
    import uvicorn
    print("🔌 Starting Minimal GraphQL Adapter...")
    print("🎯 Election Server URL:", ELECTION_SERVER_URL)
    print("🔑 Keyper Server URL:", KEYPER_SERVER_URL)
    print("🌐 Will serve on: http://localhost:4001")
    print("📊 GraphQL endpoint: http://localhost:4001/graphql")
    print("📡 CORS enabled for Snapshot UI")
    
    uvicorn.run(app, host="0.0.0.0", port=4001, log_level="info")
