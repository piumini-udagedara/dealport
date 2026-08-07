import { config } from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';

const backendRoot = resolve(__dirname, '..');

config({ path: resolve(backendRoot, '.env') });

const localEnvPath = resolve(backendRoot, '.env.local');
if (existsSync(localEnvPath)) {
  config({ path: localEnvPath, override: true });
}
