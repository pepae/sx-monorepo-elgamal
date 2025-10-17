[![Test CI](https://github.com/snapshot-labs/sx-monorepo/actions/workflows/test.yml/badge.svg)](https://github.com/snapshot-labs/sx-monorepo/actions/workflows/test.yml)
[![Discord](https://img.shields.io/discord/707079246388133940.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.snapshot.org/)

# Snapshot/Shutter ElGamal PoC

This is a fork of the Snapshot monorepository containing a Vue frontend, GraphQL API, transaction relayer, and TypeScript SDK including permanent shielded voting using threshold-ElGamal.

## Encrypted Voting with Docker

Run Snapshot with ElGamal threshold encrypted voting:

```bash
docker-compose up --build -d
```

This starts all services including the UI. Wait ~30 seconds, then open:

**http://localhost:8080/#/eth:encrypted-dao**

**Quick Start**: See [QUICKSTART.md](./QUICKSTART.md) for a 30-second demo.  
**Full Setup Guide**: See [DOCKER_SETUP.md](./DOCKER_SETUP.md) for complete instructions.

**What you get:**
- Privacy-preserving voting (individual choices never revealed)
- Zero-knowledge proofs for vote validity
- Threshold decryption (no single point of failure)
- Complete isolated environment for testing

**All services run in Docker:**
- Election Server (port 5000)
- Keyper Server (port 5001)
- GraphQL Adapter (port 4001)
- Snapshot UI (port 8080)

---

## Important Disclaimer

**This is a proof-of-concept demonstration only.** The implementation showcases the technical feasibility of integrating threshold ElGamal encryption with Snapshot's voting system, but has significant limitations:

### Current Limitations:
- **Centralized keypers**: All keyper instances run locally on a single machine. In production, keypers must be distributed across independent operators to provide meaningful threshold security.
- **Binary votes only**: Currently supports yes/no voting. Multi-choice voting is possible by splitting choices into multiple binary votes, but this is not yet implemented.
- **No persistence**: Data is stored in memory only and lost on restart.
- **No authentication**: No voter identity verification or sybil resistance.
- **Development environment**: Not hardened for production use.

### Production Requirements:
Before any production deployment, this system would require:
- Distributed keyper infrastructure across independent operators
- Secure key generation ceremony
- Persistent storage with backup/recovery
- Authentication and authorization system
- Security audit of cryptographic implementation
- Network-level security hardening
- Multi-choice voting implementation
- Comprehensive testing suite

This proof-of-concept demonstrates that threshold encrypted voting can work with Snapshot's architecture, but significant engineering work would be needed for a production-ready system.

## Apps and packages

- [`./apps/ui`](./apps/ui): Snapshot official frontend using Vue 3
- [`./apps/api`](./apps/api): Multichain indexer for Snapshot X using [Checkpoint](https://checkpoint.box)
- [`./apps/mana`](./apps/mana): Transaction relayer for gasless voting on Snapshot X
- [`./packages/sx.js`](./packages/sx.js): TypeScript SDK for Snapshot and Snapshot X

# Usage

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

#### UI only

```sh
yarn dev
```

#### UI with backend services

[See here.](./README.md#running-local-services)

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Runs tests

```
yarn test
```

### Run E2E tests using Playwright

```
yarn test:e2e
```

### Verifies TypeScript code

```
yarn typecheck
```

## Running local services

You can run all local services (api, mana, ui) with single command assuming you have all necessary environment variables set up.
Local APIs will only be used for Ethereum Sepolia and Starknet Sepolia.

This command will allow you to select which services you want to run.

```
yarn dev:interactive
```

### Setup

You need to have Docker running on your machine.

In `apps/api` and `apps/mana` copy `.env.example` to `.env` files.

In `apps/mana/.env` you need to fill in following empty variables:

- `WALLET_SECRET` - if you want to use it as relayer (used for both Starknet and Ethereum wallets).
- `HERODOTUS_API_KEY` and `HERODOTUS_LEGACY_API_KEY` - if you want to use L1<->L2 messaging (voting with strategies that use L1 proofs)

### Getting it running faster

If you run `yarn dev:interactive` it will take long time to sync all the blocks for the first time. To mitigate it you can just change starting block
for indexing here:

- https://github.com/snapshot-labs/sx-monorepo/blob/daad48dbd2aa775e47334d0697cb84477c1d3427/apps/api/src/starknet/config.ts#L40 (for Starknet)
- https://github.com/snapshot-labs/sx-monorepo/blob/9f5c78468c72e0ddd51578bdd984cc9da19f119a/apps/api/src/evm/config.ts#L23 (for Ethereum)

If you do that make sure to create a new space, because spaces created before the new starting block you picked won't be available.

## Versioning packages

Packages are versioned using [`changesets`](https://github.com/changesets/changesets).
In most cases all you need to do is when adding new changes to versioned packages (right now it's just `sx.js`)
is to execute `yarn changeset`, specify package you updated, version bump per [semver](https://semver.org/) and description of your changes.
Then commit generated files in your PR.

Once merged changesets actions will create PR that can be used to release and publish those packages.

## Development docs

- [Using `vue-query` to fetch data](./docs/vue-query.md)
