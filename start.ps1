# PowerShell startup script for Snapshot Encrypted Voting System

Write-Host "Snapshot Encrypted Voting System" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Docker is running
try {
    docker info 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker not running"
    }
    Write-Host "[OK] Docker is running" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Docker is not running. Please start Docker Desktop and try again." -ForegroundColor Red
    exit 1
}

# Check if docker-compose is available
try {
    docker-compose version 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "docker-compose not found"
    }
    Write-Host "[OK] Docker Compose is available" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] docker-compose not found. Please install Docker Compose." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Building and starting services..." -ForegroundColor Yellow
Write-Host "This may take a few minutes on first run..." -ForegroundColor Gray
Write-Host ""

# Build and start services
docker-compose up --build -d

Write-Host ""
Write-Host "Waiting for services to be healthy..." -ForegroundColor Yellow
Write-Host ""

# Wait for services to be healthy
$maxWait = 120
$waitTime = 0
$allHealthy = $false

while ($waitTime -lt $maxWait) {
    $electionHealthy = docker-compose ps election-server 2>&1 | Select-String "healthy"
    $keyperHealthy = docker-compose ps keyper-server 2>&1 | Select-String "healthy"
    $adapterHealthy = docker-compose ps graphql-adapter 2>&1 | Select-String "healthy"
    
    if ($electionHealthy -and $keyperHealthy -and $adapterHealthy) {
        $allHealthy = $true
        break
    }
    
    Start-Sleep -Seconds 2
    $waitTime += 2
    Write-Host -NoNewline "."
}

Write-Host ""
Write-Host ""

if ($allHealthy) {
    Write-Host "[SUCCESS] All backend services are healthy and running!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Service endpoints:" -ForegroundColor Cyan
    Write-Host "  Election Server:    http://localhost:5000/api/status" -ForegroundColor Gray
    Write-Host "  Keyper Server:      http://localhost:5001/status" -ForegroundColor Gray
    Write-Host "  GraphQL Adapter:    http://localhost:4001/status" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Start the Snapshot UI:" -ForegroundColor White
    Write-Host "     cd apps/ui" -ForegroundColor Gray
    Write-Host "     npm run dev" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  2. Access the UI at: http://localhost:8080/#/eth:encrypted-dao" -ForegroundColor White
    Write-Host ""
    Write-Host "Useful commands:" -ForegroundColor Cyan
    Write-Host "  View logs:          docker-compose logs -f" -ForegroundColor Gray
    Write-Host "  Stop services:      docker-compose down" -ForegroundColor Gray
    Write-Host "  Restart:            docker-compose restart" -ForegroundColor Gray
} else {
    Write-Host "[WARNING] Services are taking longer than expected to start." -ForegroundColor Yellow
    Write-Host "  Check the logs: docker-compose logs" -ForegroundColor Gray
}
