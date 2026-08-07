# DEALPORT Admin Dashboard

Full-stack admin dashboard for DEALPORT built with NestJS, Prisma, PostgreSQL, and Next.js.

## Stack

- Backend: NestJS, TypeScript, Prisma, PostgreSQL, JWT, Swagger
- Frontend: Next.js 15, TypeScript, Tailwind CSS v4

## Project structure

```text
backend/   NestJS API (port 3001)
frontend/  Next.js admin UI (port 3000)
docker-compose.yml  PostgreSQL for local development
```

## Prerequisites

- Node.js 20+
- PostgreSQL 16 or Docker Desktop

## Quick start

### 1. Start PostgreSQL

Using Docker:

```bash
docker compose up -d
```

This creates a local PostgreSQL instance for the app.

### 2. Backend setup

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate deploy
npm run prisma:seed
npm run start:dev
```

The API will run at http://localhost:3001.

Swagger docs are available at http://localhost:3001/docs.

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

The UI will run at http://localhost:3000.

## Database setup

If you need to create the database manually:

```bash
createdb DEALPORT
psql -U dealport -d DEALPORT
```

If you are using the local app credentials from the example env, the backend expects:

```text
postgresql://dealport:dealport@localhost:5432/DEALPORT?schema=public
```

## Prisma migration commands

From the backend folder:

```bash
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
```

## Environment variables

### Backend

Create a backend/.env file from .env.example with:

```env
DATABASE_URL="postgresql://dealport:dealport@localhost:5432/DEALPORT?schema=public"
JWT_SECRET="change-me-in-production"
JWT_EXPIRES_IN="7d"
PORT=3001
CORS_ORIGIN="http://localhost:3000"
```

### Frontend

Create a frontend/.env.local file with:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Seed credentials

```text
Email: admin@dealport.com
Password: admin123
```

## API highlights

- POST /auth/login
- GET /products
- GET /products/top
- GET /dashboard/stats
- GET /dashboard/card-stats
- GET /dashboard/weekly-report
- Swagger docs at /docs
