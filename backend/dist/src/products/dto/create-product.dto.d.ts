import { ProductStatus } from '@prisma/client';
export declare class CreateProductDto {
    name: string;
    description?: string;
    sku?: string;
    price: number;
    compareAt?: number;
    stock: number;
    status: ProductStatus;
    categoryId: string;
    tagIds?: string[];
    images?: string[];
    imageUrl?: string;
}
