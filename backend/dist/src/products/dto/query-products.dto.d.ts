import { ProductStatus } from '@prisma/client';
export declare class QueryProductsDto {
    search?: string;
    status?: ProductStatus;
    categoryId?: string;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'salesCount' | 'name' | 'price';
    sortOrder?: 'asc' | 'desc';
}
