"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
const path_1 = require("path");
const backendRoot = (0, path_1.resolve)(__dirname, '..');
(0, dotenv_1.config)({ path: (0, path_1.resolve)(backendRoot, '.env') });
const localEnvPath = (0, path_1.resolve)(backendRoot, '.env.local');
if ((0, fs_1.existsSync)(localEnvPath)) {
    (0, dotenv_1.config)({ path: localEnvPath, override: true });
}
//# sourceMappingURL=load-env.js.map