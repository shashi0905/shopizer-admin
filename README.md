# Shopizer Administration (shopizer-admin) Angular web app

## Tested with node v12.22.7

Requires Angular cli installed (npm install -g @angular/cli@13.3.x)

## Quick Setup (Single Command)

### macOS / Linux
```bash
./setup.sh
```

### Windows
```bash
setup.bat
```

The setup script will:
- ✅ Check Node.js and Angular CLI
- ✅ Install all dependencies
- ✅ Configure environment (optional)
- ✅ Start development server (optional)

## Manual Setup

### Run locally

```bash
npm install --legacy-peer-deps
ng serve -o
```

Access at: http://localhost:4200

### Build app
```bash
ng build
```

### Run docker images

Assumes your backend runs on http://localhost:8080/api

```bash
docker run \
-e "APP_BASE_URL=http://localhost:9090/api" \
-it --rm -p 4200:80 shopizerecomm/shopizer-admin
```

## Default Credentials

- **Username**: admin@shopizer.com
- **Password**: password

## Documentation

Complete documentation available in `docs/` folder:
- [Documentation Index](docs/README.md)
- [Setup & Build Guide](docs/SETUP_AND_BUILD.md)
- [Developer Onboarding](docs/ONBOARDING.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Project Overview](docs/PROJECT_OVERVIEW.md)
