import './scripts/load-env';
import { defineConfig } from 'prisma/config';

// Client generation only reads the schema; it does not connect to Postgres. A
// placeholder keeps container builds working when deployment secrets are
// injected only at runtime. Migration and application commands still require
// a real DATABASE_URL.
const databaseUrl =
  process.env.DATABASE_URL ?? 'postgresql://build:build@localhost:5432/build';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'ts-node prisma/seed.ts',
  },
  datasource: {
    url: databaseUrl,
  },
});
