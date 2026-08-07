# DEALPORT Admin Dashboard

Full-stack take-home implementation: NestJS + Prisma API with a Next.js admin UI for the DEALPORT e-commerce dashboard.

## Live URLs

| Service  | URL |
|----------|-----|
| Frontend | _Deploy and add URL here_ |
| API      | _Deploy and add URL here_ |

## Seed credentials

| Email | Password |
|-------|----------|
| `admin@dealport.com` | `admin123` |

## Stack

- **Backend:** NestJS, TypeScript, Prisma, PostgreSQL, JWT
- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4

## Project structure

```
├── backend/          NestJS API (port 3001)
├── frontend/         Next.js admin UI (port 3000)
├── docker-compose.yml PostgreSQL for local dev
└── package.json      npm workspaces root
```

## Prerequisites

- Node.js 20+
- PostgreSQL 16 (or Docker)

## Quick start

### 1. Start PostgreSQL

```bash
docker compose up -d
```

Or point `DATABASE_URL` in `backend/.env` to your own PostgreSQL instance.

### 2. Backend setup

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

API runs at **http://localhost:3001**

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Frontend runs at **http://localhost:3000**

## Environment variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret for signing JWT tokens |
| `JWT_EXPIRES_IN` | Token expiry (default `7d`) |
| `PORT` | API port (default `3001`) |
| `CORS_ORIGIN` | Allowed frontend origin |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

## API endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/auth/login` | No | Admin login |
| GET | `/products` | JWT | List products (search, filter, pagination) |
| GET | `/products/top` | JWT | Top selling products |
| GET | `/products/:id` | JWT | Get product |
| POST | `/products` | JWT | Create product |
| PATCH | `/products/:id` | JWT | Update product |
| DELETE | `/products/:id` | JWT | Delete product |
| GET | `/categories` | JWT | List categories |
| GET | `/categories/:id` | JWT | Get category |
| POST | `/categories` | JWT | Create category |
| PATCH | `/categories/:id` | JWT | Update category |
| DELETE | `/categories/:id` | JWT | Delete category |
| GET | `/tags` | JWT | List tags |
| GET | `/tags/:id` | JWT | Get tag |
| POST | `/tags` | JWT | Create tag |
| PATCH | `/tags/:id` | JWT | Update tag |
| DELETE | `/tags/:id` | JWT | Delete tag |

## Architecture notes

- **Backend:** Controller → Service → Prisma pattern. DTOs validated with `class-validator`. JWT guards protect all product/category/tag routes.
- **Frontend:** Client-side auth token in `localStorage`. Typed API client in `src/lib/api.ts`. Admin shell with sidebar navigation matching DEALPORT green theme.
- **Dashboard:** Stat cards and transaction table use static demo data (per scope). Best Selling / Top Products widgets load from `GET /products/top`.
- **Image upload:** File picker previews via base64 locally. Only valid HTTP URLs are persisted to the API (documented stub approach).

## Deployment

### Backend (e.g. Railway / Render)

1. Provision PostgreSQL
2. Set env vars from `.env.example`
3. Run `npx prisma migrate deploy && npm run prisma:seed`
4. Start with `npm run start:prod`

### Frontend (e.g. Vercel)

1. Set `NEXT_PUBLIC_API_URL` to deployed API URL
2. Deploy with default Next.js settings

## Hours spent

_Approximate: fill in before submission_

## Scoped screens implemented

- [x] Dashboard (shell, stats, chart, transactions, API-driven product widgets)
- [x] Add Product (form, publish/draft, categories/tags, image UI)
- [x] Product List (API list, search, filter, pagination)
# m
# dealport
