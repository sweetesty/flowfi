# Development Guide

## Prerequisites
- Rust toolchain (stable)
- Node.js 20
- npm
- Docker & Docker Compose (for Postgres)
- `stellar` CLI (install from https://github.com/stellar/stellar-cli)
- PostgreSQL (or use Docker)

## Local setup (quick)

1. Start Postgres (docker-compose):

```bash
docker compose up -d
```

2. Backend

```bash
cd backend
npm ci
# Set env vars (see .env.example)
cp .env.example .env
# Edit .env as needed (DATABASE_URL, STELLAR_NETWORK, etc.)
npm run dev
```

3. Frontend

```bash
cd frontend
npm ci
npm run dev
# open http://localhost:3000
```

4. Contracts (build and test)

```bash
cd contracts
# Run unit tests
cargo test
# Build WASM
cargo build --target wasm32-unknown-unknown --release
```

5. Deploy contract to testnet (optional)

Install `stellar` CLI then run (example):

```bash
./scripts/deploy.sh --network testnet --source-account YOUR_KEY_OR_IDENTITY
```

This will build, optimize, deploy the WASM and save `deploy/deployment-info.json` with results.

## Running the full stack locally
- Start Postgres: `docker compose up -d`
- Run backend: `cd backend && npm run dev`
- Run frontend: `cd frontend && npm run dev`
- Build contracts (if developing contracts): `cd contracts && cargo build --target wasm32-unknown-unknown --release`

## Running tests
- Backend tests (Vitest):

```bash
cd backend
npm ci
npx vitest
```

- Contract tests (cargo):

```bash
cd contracts
cargo test
```

## How to run against testnet vs local sandbox
- Use `.env` to set `SANDBOX_MODE_ENABLED=true` to use local sandbox settings.
- Set `STELLAR_NETWORK=testnet` and `STELLAR_HORIZON_URL` to talk to testnet.
- Use `stellar container start` (stellar CLI) to start a local Soroban sandbox environment.

## Troubleshooting
- If the backend cannot connect to Postgres, verify `DATABASE_URL` and that Docker is running.
- If contracts fail to build, ensure `wasm32-unknown-unknown` target is installed: `rustup target add wasm32-unknown-unknown`.
- If `stellar` CLI commands fail in CI, ensure the CLI is installed in the CI environment or use the GitHub Action `stellar/stellar-cli@vX`.

## Links
- Architecture overview: [ARCHITECTURE.md](ARCHITECTURE.md)
- Contracts: `contracts/stream_contract`
- Backend: `backend/`
- Frontend: `frontend/`
