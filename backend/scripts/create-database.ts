import './load-env';
import { Client } from 'pg';

function getMaintenanceUrl(databaseUrl: string): {
  maintenanceUrl: string;
  databaseName: string;
} {
  const url = new URL(databaseUrl);
  const databaseName = decodeURIComponent(url.pathname.slice(1).split('?')[0]);

  if (!databaseName) {
    throw new Error('DATABASE_URL must include a database name.');
  }

  url.pathname = '/postgres';
  return { maintenanceUrl: url.toString(), databaseName };
}

function shouldSkipDatabaseCreation(databaseUrl: string): boolean {
  if (process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_SERVICE_ID) {
    return true;
  }

  return new URL(databaseUrl).hostname.endsWith('.railway.internal');
}

function assertLocalDevelopmentUrl(databaseUrl: string): void {
  const hostname = new URL(databaseUrl).hostname;
  if (!hostname.endsWith('.railway.internal')) {
    return;
  }

  throw new Error(
    `DATABASE_URL points to "${hostname}", which is only reachable inside Railway. ` +
      'Create backend/.env.local from .env.local.example to use localhost locally.',
  );
}

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set.');
  }

  if (shouldSkipDatabaseCreation(databaseUrl)) {
    console.log('Skipping database creation (managed by Railway).');
    return;
  }

  assertLocalDevelopmentUrl(databaseUrl);

  const { maintenanceUrl, databaseName } = getMaintenanceUrl(databaseUrl);
  const client = new Client({ connectionString: maintenanceUrl });

  try {
    await client.connect();

    const { rows } = await client.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [databaseName],
    );

    if (rows.length > 0) {
      console.log(`Database "${databaseName}" already exists.`);
      return;
    }

    const escapedName = databaseName.replace(/"/g, '""');
    await client.query(`CREATE DATABASE "${escapedName}"`);
    console.log(`Database "${databaseName}" created.`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
