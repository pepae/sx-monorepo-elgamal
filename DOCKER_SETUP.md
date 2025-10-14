# Snapshot Encrypted Voting - Docker Setup

Complete Docker-based deployment for Snapshot with ElGamal threshold encrypted voting.

## 🎯 What This Does

This Docker Compose setup provides a complete, isolated environment for testing Snapshot's privacy-preserving voting system:

- **ElGamal Election Server** (Port 5000): Manages encrypted votes and homomorphic tallying
- **Keyper Threshold Server** (Port 5001): Provides threshold decryption with distributed key shares
- **GraphQL Adapter** (Port 3001): Bridges Snapshot UI with the ElGamal backend
- **Snapshot UI** (Port 8080): The main user interface for creating proposals and voting

## 🚀 Quick Start

### Prerequisites

- Docker (20.10+)
- Docker Compose (2.0+)
- 4GB+ RAM available
- Ports 3001, 5000, 5001, 8080 available

### Start Everything

```bash
# From the sx-monorepo directory
docker-compose up --build
```

This will:
1. Clone the ElGamal PoC from GitHub
2. Build all containers
3. Start all services in the correct order
4. Wait for health checks to pass

### Access the Application

Once all services are running (look for "✅ All services healthy"), open:

**🌐 Main Entry Point**: http://localhost:8080/#/eth:encrypted-dao

## 📋 Service Details

### ElGamal Election Server (Port 5000)
- Handles vote encryption and verification
- Performs homomorphic vote aggregation
- Stores encrypted votes (never sees plaintext)
- Health check: http://localhost:5000/api/status

### Keyper Threshold Server (Port 5001)
- Manages threshold key generation
- Provides partial decryptions with zero-knowledge proofs
- Prevents single-point decryption
- Health check: http://localhost:5001/status

### GraphQL Adapter (Port 3001)
- Translates Snapshot GraphQL queries to ElGamal API calls
- Manages proposal storage and state
- Formats encrypted votes for UI display
- Health check: http://localhost:3001/status

### Snapshot UI (Port 8080)
- Create proposals with encrypted voting
- Cast encrypted votes with zero-knowledge proofs
- View ciphertext and proof verification
- Admin dashboard for proposal finalization

## 🔧 Usage Guide

### Creating a Proposal

1. Navigate to http://localhost:8080/#/eth:encrypted-dao
2. Click "New proposal"
3. Fill in:
   - Title
   - Description
   - Choices (e.g., "For", "Against", "Abstain")
   - Voting period
4. Submit - proposal will be created with encryption enabled

### Casting a Vote

1. Open any active proposal
2. Select your choice
3. Click "Vote"
4. Your vote is:
   - Encrypted client-side with ElGamal
   - Proven valid with zero-knowledge proof
   - Submitted as ciphertext only
   - **Never** revealed individually

### Viewing Encrypted Votes

On the "Votes" tab, you'll see:
- **Encrypted choice** with lock icon
- **Ciphertext components** (c1, c2 - truncated)
- **ZK proof verification** status (✓ verified)
- Individual choices remain hidden

### Finalizing a Proposal

Use the admin dashboard to trigger threshold decryption:

```bash
# Manually end voting for a proposal
curl -X POST http://localhost:3001/api/end_voting/{proposal_id}
```

Or visit: http://localhost:3001/admin

This will:
1. Request partial decryptions from keypers
2. Verify zero-knowledge proofs
3. Reconstruct aggregate tally via Lagrange interpolation
4. Reveal **only** the total counts (e.g., "5 For, 3 Against")
5. Individual votes remain encrypted forever

## 🛠️ Development Commands

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f election-server
docker-compose logs -f graphql-adapter
docker-compose logs -f snapshot-ui
```

### Stop Services

```bash
docker-compose down
```

### Rebuild After Changes

```bash
docker-compose up --build
```

### Clean Everything

```bash
docker-compose down -v  # Remove volumes too
```

## 🔍 Testing the System

### Quick Health Check

```bash
# Check all services are running
curl http://localhost:5000/api/status  # Election server
curl http://localhost:5001/status       # Keyper server
curl http://localhost:3001/status       # GraphQL adapter
```

### Manual Vote Submission (Advanced)

```bash
# Initialize election
curl -X POST http://localhost:5000/api/init

# Get ElGamal parameters
curl http://localhost:5000/api/params

# Submit encrypted vote (requires client-side encryption)
curl -X POST http://localhost:5000/api/vote \
  -H "Content-Type: application/json" \
  -d '{
    "c1": "...",
    "c2": "...",
    "proof": [...],
    "voter": "0x...",
    "reason": "Test vote"
  }'
```

## 📊 Architecture Overview

```
┌─────────────────┐
│  Snapshot UI    │  Port 8080
│  (Vue.js)       │  User Interface
└────────┬────────┘
         │ GraphQL
         ▼
┌─────────────────┐
│ GraphQL Adapter │  Port 3001
│ (FastAPI)       │  Translation Layer
└────────┬────────┘
         │ REST API
         ▼
┌─────────────────┐      ┌─────────────────┐
│ Election Server │◄────►│ Keyper Server   │
│ (Flask)         │      │ (Flask)         │
│ Port 5000       │      │ Port 5001       │
│                 │      │                 │
│ - Vote Storage  │      │ - Key Shares    │
│ - Aggregation   │      │ - Threshold     │
│ - Verification  │      │   Decryption    │
└─────────────────┘      └─────────────────┘
```

## 🔒 Privacy Guarantees

### What's Hidden
- ✅ Individual vote choices (encrypted with ElGamal)
- ✅ Voter-to-choice linkage (only ciphertext stored)
- ✅ Real-time tallies (scores hidden until finalization)

### What's Revealed
- ✅ That a vote was cast (public transaction)
- ✅ Voter address (on-chain identity)
- ✅ Ciphertext components (c1, c2) - mathematically unlinkable to choice
- ✅ Aggregate results after threshold decryption

### How It Works
1. **Voting Phase**: All votes encrypted, no plaintext stored
2. **Aggregation**: Homomorphic addition of ciphertexts (no decryption)
3. **Finalization**: Threshold decryption reveals only aggregated tally
4. **Forever**: Individual choices remain cryptographically hidden

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port
# Windows PowerShell:
Get-NetTCPConnection -LocalPort 8080 | Select-Object OwningProcess
Stop-Process -Id <PID>

# Linux/Mac:
lsof -i :8080
kill -9 <PID>
```

### Services Not Starting

```bash
# Check logs
docker-compose logs election-server
docker-compose logs keyper-server

# Restart specific service
docker-compose restart election-server
```

### UI Can't Connect to GraphQL

Check the adapter is running:
```bash
curl http://localhost:3001/status
```

Verify environment variable in `docker-compose.yml`:
```yaml
environment:
  - VITE_GRAPHQL_URL=http://localhost:3001/graphql
```

### Votes Not Showing

1. Check election server has votes:
```bash
curl http://localhost:5000/api/ciphertexts
```

2. Check adapter is forwarding correctly:
```bash
curl http://localhost:3001/api/proposals
```

3. Check browser console for GraphQL errors

### Threshold Decryption Failing

Ensure keyper server is healthy:
```bash
curl http://localhost:5001/status
```

Check keyper logs:
```bash
docker-compose logs keyper-server
```

## 📚 Additional Resources

- **ElGamal PoC**: https://github.com/pepae/SnapshotShieldedVoting2PoC
- **Snapshot UI**: https://github.com/snapshot-labs/snapshot
- **Main Documentation**: See `CLAUDE.md` for detailed encryption explanation

## ⚠️ Important Notes

### For Development Only

This setup is for **testing and development**. Production deployment requires:

- ✅ Professional security audit
- ✅ Persistent database (PostgreSQL)
- ✅ Voter authentication (wallet signatures)
- ✅ HTTPS/TLS everywhere
- ✅ HSMs for keyper shares
- ✅ Distributed keyper deployment
- ✅ Rate limiting and DDoS protection
- ✅ Monitoring and alerting

### Limitations

- In-memory storage (data lost on restart)
- Single server deployment (not distributed)
- No voter authentication
- Discrete log limits vote counts to ~10,000
- Educational implementation (not audited)

## 🤝 Contributing

Issues and improvements welcome! This is a proof-of-concept for privacy-preserving voting.

## 📄 License

See LICENSE file in repository root.
