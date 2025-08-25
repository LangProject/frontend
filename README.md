# Quick Start

## Prerequisites

### Install `Docker Desktop`

1. Go to [Docker Desktop official site](https://www.docker.com/products/docker-desktop/).
2. Intall `Docker Desktop`.

## Getting Started

1. **Run `Docker Destop` on your computer.**
2. To run the `frontend` application with default settings:

```bash
# Run the Docker Compose stack from the /frontend directory
docker compose up
```

The application will be available at: [**http://localhost:3000**](http://localhost:3000)

## Local development

For local develoopment, please, go to **`./react-app`** directory and proceed with the instructions in the [**`react-app/README.md`**](./react-app/README.md)

## Commands Reference

### Basic Operations

```bash
# Stop services
docker compose down
```

### Development & Debugging

```bash
# View container status
docker compose ps

# Execute commands in running container
docker compose exec react-app sh
```

### Cleanup

```bash
# Stop and remove containers, networks
docker compose down
```

### Debug Commands

```bash
# Inspect the running container
docker compose exec react-app sh

# Check running processes
docker compose exec react-app ps
```

## Project Structure

```txt
frontend/
├── react-app/
    ├── Dockerfile            # Multi-stage build configuration
    ├── .dockerignore         # Files to exclude from build
    ├── .gitignore            # Files to exclude from git
    ├── package.json          # Node.js dependencies
    ├── package-lock.json     # Node.js dependencies lock file
    ├── public/               # Static files 
    └── src/                  # React source code
├── CODE_OF_CONDUCT.md        # Code of Conduct
├── docker-compose.yaml       # Main orchestration file
└── README.md                 # Project description
```

## Installing `Node.js`

### Windows

1. Go to [Node.js official site](https://nodejs.org/).
2. Download the **LTS installer** (`.msi`).
3. Run the installer (keep defaults checked).
4. Verify installation:

   ```bash
   node -v
   npm -v
   ```

### macOS

#### Option 1 – Official Installer

1. Download the `.pkg` installer from [nodejs.org](https://nodejs.org/).
2. Run the installer.

#### Option 2 – Homebrew

```bash
brew install node
```

Verify installation:

```bash
node -v
npm -v
```

---

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v
```

---

✅ You now have **Node.js + npm** installed and are ready to run React applications.
