"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./scripts/load-env");
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
        seed: 'ts-node prisma/seed.ts',
    },
    datasource: {
        url: (0, config_1.env)('DATABASE_URL'),
    },
});
//# sourceMappingURL=prisma.config.js.map