import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ValidationGuard implements CanActivate {
    private readonly dtoClass;
    constructor(dtoClass: new () => object);
    canActivate(context: ExecutionContext): boolean;
}
