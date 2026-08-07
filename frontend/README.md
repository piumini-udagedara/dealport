# DEALPORT Frontend

Next.js admin UI for the DEALPORT dashboard.

## Setup

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

The app will run at http://localhost:3000.

## Environment

Create a frontend/.env.local file with:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Notes

- The frontend expects the backend to be running on port 3001.
- Login uses the demo credentials:
  - Email: admin@dealport.com
  - Password: admin123
