#!/bin/bash
# Startup script for Snapshot Encrypted Voting System

set -e

echo "🔐 Snapshot Encrypted Voting System"
echo "===================================="
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    echo "❌ docker-compose not found. Please install Docker Compose."
    exit 1
fi

echo "✅ Docker is running"
echo "✅ Docker Compose is available"
echo ""

# Build and start services
echo "🏗️  Building and starting services..."
echo "   This may take a few minutes on first run..."
echo ""

docker-compose up --build -d

echo ""
echo "⏳ Waiting for services to be healthy..."
echo ""

# Wait for services to be healthy
MAX_WAIT=120
WAIT_TIME=0
ALL_HEALTHY=false

while [ $WAIT_TIME -lt $MAX_WAIT ]; do
    ELECTION_HEALTHY=$(docker-compose ps election-server | grep "healthy" || echo "")
    KEYPER_HEALTHY=$(docker-compose ps keyper-server | grep "healthy" || echo "")
    ADAPTER_HEALTHY=$(docker-compose ps graphql-adapter | grep "healthy" || echo "")
    
    if [ -n "$ELECTION_HEALTHY" ] && [ -n "$KEYPER_HEALTHY" ] && [ -n "$ADAPTER_HEALTHY" ]; then
        ALL_HEALTHY=true
        break
    fi
    
    sleep 2
    WAIT_TIME=$((WAIT_TIME + 2))
    echo -n "."
done

echo ""
echo ""

if [ "$ALL_HEALTHY" = true ]; then
    echo "✅ All backend services are healthy and running!"
    echo ""
    echo "📡 Service endpoints:"
    echo "   Election Server:       http://localhost:5000/api/status"
    echo "   Keyper Server:         http://localhost:5001/status"
    echo "   GraphQL Adapter:       http://localhost:4001/status"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Start the Snapshot UI:"
    echo "      npm run dev"
    echo ""
    echo "   2. Access the UI at: http://localhost:8080/#/eth:encrypted-dao"
    echo ""
    echo "📋 Useful commands:"
    echo "   View logs:             docker-compose logs -f"
    echo "   Stop services:         docker-compose down"
    echo "   Restart:               docker-compose restart"
else
    echo "⚠️  Services are taking longer than expected to start."
    echo "   Check the logs: docker-compose logs"
fi
