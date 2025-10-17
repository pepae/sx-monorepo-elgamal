# 🚀 Quick Start Guide - Snapshot Encrypted Voting

## Quick Setup (Recommended)

**One command to start everything:**

```bash
docker-compose up --build -d
```

Wait ~30 seconds for all services to start. Then access the app at:

**http://localhost:8080/#/eth:encrypted-dao**

That's it! All services including UI are running in Docker. No Node.js installation required.

## What You Get

After setup, you'll have:

| Service | URL | Purpose | Running In |
|---------|-----|---------|------------|
| **Snapshot UI** | http://localhost:8080/#/eth:encrypted-dao | Main interface - START HERE | Docker |
| Election Server | http://localhost:5000/api/status | Vote storage & encryption | Docker |
| Keyper Server | http://localhost:5001/status | Threshold key management | Docker |
| GraphQL Adapter | http://localhost:4001/status | GraphQL API bridge | Docker |

## 30-Second Demo

1. **Open**: http://localhost:8080/#/eth:encrypted-dao
2. **Create Proposal**: Click "New proposal" → Fill form → Submit
3. **Vote**: Open proposal → Select choice → Vote
4. **View Encryption**: Go to "Votes" tab → See ciphertext (c1, c2) and ZK proof ✓
5. **Finalize**: http://localhost:3001/admin → Select proposal → Click "End Voting"

## Key Features

✅ **Private Votes**: Individual choices encrypted with ElGamal  
✅ **Zero-Knowledge Proofs**: Prove vote validity without revealing choice  
✅ **Threshold Decryption**: Requires multiple keypers to reveal results  
✅ **Homomorphic Tallying**: Count votes without decrypting individuals  

## Verify Privacy

After voting, check the "Votes" tab:
- ✅ Shows "Encrypted choice" with lock icon
- ✅ Displays ciphertext: `c1: 1234...` and `c2: 5678...`
- ✅ Shows `✓ ZK proof verified`
- ❌ **Never** shows actual vote choice

After finalization:
- ✅ Shows aggregate: "5 For, 3 Against, 2 Abstain"
- ❌ **Never** reveals who voted for what

## Common Commands

```bash
# Start everything
docker-compose up -d

# Rebuild and start
docker-compose up --build -d

# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f ui
docker-compose logs -f graphql-adapter

# Stop all services
docker-compose down

# Stop and remove all data
docker-compose down -v

# Restart a service
docker-compose restart ui
```

## Troubleshooting

### Services won't start
```bash
docker-compose down
docker-compose up --build
```

### Port conflicts
```powershell
# Windows: Find what's using port 8080
Get-NetTCPConnection -LocalPort 8080
Stop-Process -Id <PID>
```

```bash
# Linux/Mac
lsof -i :8080
kill -9 <PID>
```

### Can't access UI
1. Make sure all services are running: `docker-compose ps`
2. Check all services are healthy (status shows "healthy" or "Up")
3. Check logs: `docker-compose logs -f`
4. Verify service endpoints:
   - http://localhost:8080/#/eth:encrypted-dao (UI)
   - http://localhost:5000/api/status (Election Server)
   - http://localhost:5001/status (Keyper Server)
   - http://localhost:4001/status (GraphQL Adapter)

## Architecture

```
Browser
   ↓
Snapshot UI (Vue.js) ← Docker container (port 8080)
   ↓ GraphQL (port 4001)
GraphQL Adapter ← Docker container
   ↓ REST API
Election Server ←→ Keyper Server ← Docker containers
(port 5000)         (port 5001)
```

## Privacy Guarantee

```
Individual Vote → [Encrypted] → Ciphertext (c1, c2)
                                      ↓
                              Homomorphic Addition
                                      ↓
                              Aggregate Ciphertext
                                      ↓
                          Threshold Decryption (t keypers)
                                      ↓
                              Total Tally ONLY
```

**Individual choices remain encrypted forever** 🔒

## Full Documentation

📖 **Complete Guide**: [DOCKER_SETUP.md](./DOCKER_SETUP.md)  
📖 **Encryption Details**: [CLAUDE.md](./CLAUDE.md)  
📖 **ElGamal PoC**: https://github.com/pepae/SnapshotShieldedVoting2PoC

## Need Help?

1. Check logs: `docker-compose logs -f`
2. Read [DOCKER_SETUP.md](./DOCKER_SETUP.md#troubleshooting)
3. Ensure all health checks pass: `docker-compose ps`

---

**⚠️ For Development/Testing Only**  
This is a proof-of-concept. Production use requires security audit, authentication, persistence, and distributed deployment.
