# Docker Guide for LangProject Frontend

This guide explains how to run the Next.js frontend application using Docker, ensuring consistent development environments across Windows, macOS, and Linux.

## 🐳 Prerequisites

1. **Docker Desktop** installed on your machine
   - [Download for Windows](https://docs.docker.com/desktop/install/windows/)
   - [Download for macOS](https://docs.docker.com/desktop/install/mac/)
   - [Download for Linux](https://docs.docker.com/desktop/install/linux/)

2. **Docker Compose** (usually included with Docker Desktop)

## 🚀 Quick Start

### Development Mode (Recommended for development)

```bash
# Navigate to the frontend directory
cd frontend

# Start the development environment
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode (background)
docker-compose -f docker-compose.dev.yml up --build -d
```

**Access the application:** http://localhost:3000

### Production Mode

```bash
# Build and run production version
docker-compose up --build

# Or run in detached mode
docker-compose up --build -d
```

## 📁 File Structure for Docker

```
frontend/
├── Dockerfile              # Production Dockerfile
├── Dockerfile.dev          # Development Dockerfile
├── docker-compose.yml      # Production Docker Compose
├── docker-compose.dev.yml  # Development Docker Compose
├── src/
│   └── app/               # Next.js App Router (this is your "pages" directory)
│       ├── page.tsx       # Home page (/)
│       ├── dashboard/     # Dashboard pages (/dashboard/*)
│       │   └── page.tsx   # Dashboard page (/dashboard)
│       ├── about/         # About pages (/about/*)
│       │   └── page.tsx   # About page (/about)
│       └── layout.tsx     # Root layout
└── ...
```

## 🛣️ Next.js App Router (File-based Routing)

In Next.js 13+, the `src/app/` directory replaces the old `pages/` directory. Here's how routing works:

### Basic Routing

| File Path | URL Route | Description |
|-----------|-----------|-------------|
| `src/app/page.tsx` | `/` | Home page |
| `src/app/about/page.tsx` | `/about` | About page |
| `src/app/dashboard/page.tsx` | `/dashboard` | Dashboard page |

### Dynamic Routing

| File Path | URL Route | Description |
|-----------|-----------|-------------|
| `src/app/users/[id]/page.tsx` | `/users/123` | Dynamic user page |
| `src/app/posts/[slug]/page.tsx` | `/posts/my-post` | Dynamic post page |

### Nested Routes

| File Path | URL Route | Description |
|-----------|-----------|-------------|
| `src/app/dashboard/settings/page.tsx` | `/dashboard/settings` | Dashboard settings |
| `src/app/dashboard/profile/page.tsx` | `/dashboard/profile` | Dashboard profile |

### Special Files

| File Name | Purpose |
|-----------|---------|
| `layout.tsx` | Shared layout for all pages in that directory |
| `loading.tsx` | Loading UI for the route |
| `error.tsx` | Error UI for the route |
| `not-found.tsx` | 404 page |

## 🔧 Docker Commands

### Development Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Start in background
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development environment
docker-compose -f docker-compose.dev.yml down

# Rebuild and start
docker-compose -f docker-compose.dev.yml up --build

# Access container shell
docker-compose -f docker-compose.dev.yml exec next-app sh
```

### Production Commands

```bash
# Start production environment
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop production environment
docker-compose down

# Rebuild and start
docker-compose up --build
```

### General Docker Commands

```bash
# List running containers
docker ps

# Stop all containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -aq)

# Remove all images
docker rmi $(docker images -q)

# Clean up unused resources
docker system prune -a
```

## 🔄 Hot Reloading

The development setup includes hot reloading, which means:

- **File changes are automatically detected**
- **Browser refreshes automatically**
- **No need to restart the container**

### Windows-specific Configuration

The Docker Compose configuration includes special settings for Windows:

```yaml
environment:
  - WATCHPACK_POLLING=true      # Enables file watching on Windows
  - CHOKIDAR_USEPOLLING=true     # Alternative polling method
```

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Find what's using port 3000
   lsof -i :3000  # macOS/Linux
   netstat -ano | findstr :3000  # Windows
   
   # Kill the process or change the port in docker-compose.yml
   ```

2. **Hot reloading not working on Windows**
   ```bash
   # Ensure WATCHPACK_POLLING is set to true
   # Check if Docker Desktop has file sharing enabled for your project directory
   ```

3. **Container won't start**
   ```bash
   # Check logs
   docker-compose -f docker-compose.dev.yml logs
   
   # Rebuild the image
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. **Permission issues on Linux/macOS**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

### Performance Tips

1. **Use .dockerignore** to exclude unnecessary files
2. **Mount volumes** for development (already configured)
3. **Use multi-stage builds** for production (already configured)

## 🌐 Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Development
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

## 📦 Adding New Pages

To add a new page:

1. **Create a new directory** in `src/app/`
2. **Add a `page.tsx` file**
3. **Export a default React component**

Example:
```bash
# Create a new contact page
mkdir src/app/contact
touch src/app/contact/page.tsx
```

```tsx
// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
    </div>
  )
}
```

The page will be available at: http://localhost:3000/contact

## 🚀 Deployment

### Using Docker for Production

```bash
# Build production image
docker build -t lang-frontend .

# Run production container
docker run -p 3000:3000 lang-frontend
```

### Using Docker Compose for Production

```bash
# Start production environment
docker-compose up --build
```

---

## 📚 Additional Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

---

**Happy coding! 🎉** 