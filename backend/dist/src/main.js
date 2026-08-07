"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    app.enableCors({
        origin: config.get('CORS_ORIGIN', 'http://localhost:3000'),
        credentials: true,
    });
    app.useStaticAssets('uploads', {
        prefix: '/uploads',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('Dealport API')
        .setDescription('API documentation for the Dealport admin backend')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('docs', app, documentFactory);
    const port = config.get('PORT', 3001);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map