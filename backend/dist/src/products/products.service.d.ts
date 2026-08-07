import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductsDto } from './dto/query-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private mapProduct;
    findAll(query: QueryProductsDto): Promise<{
        data: {
            price: number;
            compareAt: number | null;
            tags: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
            category: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
            };
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            sku: string | null;
            stock: number;
            status: import("@prisma/client").$Enums.ProductStatus;
            imageUrl: string | null;
            imageUrls: string[];
            salesCount: number;
            categoryId: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findTop(limit?: number): Promise<{
        price: number;
        compareAt: number | null;
        tags: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
        };
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string | null;
        stock: number;
        status: import("@prisma/client").$Enums.ProductStatus;
        imageUrl: string | null;
        imageUrls: string[];
        salesCount: number;
        categoryId: string;
    }[]>;
    findOne(id: string): Promise<{
        price: number;
        compareAt: number | null;
        tags: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
        };
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string | null;
        stock: number;
        status: import("@prisma/client").$Enums.ProductStatus;
        imageUrl: string | null;
        imageUrls: string[];
        salesCount: number;
        categoryId: string;
    }>;
    create(dto: CreateProductDto): Promise<{
        price: number;
        compareAt: number | null;
        tags: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
        };
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string | null;
        stock: number;
        status: import("@prisma/client").$Enums.ProductStatus;
        imageUrl: string | null;
        imageUrls: string[];
        salesCount: number;
        categoryId: string;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        price: number;
        compareAt: number | null;
        tags: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
        };
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sku: string | null;
        stock: number;
        status: import("@prisma/client").$Enums.ProductStatus;
        imageUrl: string | null;
        imageUrls: string[];
        salesCount: number;
        categoryId: string;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
