"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./scripts/load-env");
const config_1 = require("prisma/config");
const databaseUrl = process.env.DATABASE_URL ??
    'postgresql://build:build@localhost:5432/build';
exports.default = (0, config_1.defineConfig)({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
        seed: 'ts-node prisma/seed.ts',
    },
    datasource: {
        url: databaseUrl,
    },
});
//# sourceMappingURL=prisma.config.js.map