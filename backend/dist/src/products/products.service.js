"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const productInclude = {
    category: true,
    tags: { include: { tag: true } },
};
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapProduct(product) {
        return {
            ...product,
            price: Number(product.price),
            compareAt: product.compareAt ? Number(product.compareAt) : null,
            tags: product.tags.map((pt) => pt.tag),
        };
    }
    async findAll(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const sortBy = query.sortBy ?? 'createdAt';
        const sortOrder = query.sortOrder ?? 'desc';
        const where = {
            ...(query.search && {
                OR: [
                    { name: { contains: query.search, mode: 'insensitive' } },
                    { sku: { contains: query.search, mode: 'insensitive' } },
                    { description: { contains: query.search, mode: 'insensitive' } },
                ],
            }),
            ...(query.status && { status: query.status }),
            ...(query.categoryId && { categoryId: query.categoryId }),
        };
        const [items, total] = await Promise.all([
            this.prisma.product.findMany({
                where,
                include: productInclude,
                skip,
                take: limit,
                orderBy: { [sortBy]: sortOrder },
            }),
            this.prisma.product.count({ where }),
        ]);
        return {
            data: items.map((item) => this.mapProduct(item)),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findTop(limit = 5) {
        const items = await this.prisma.product.findMany({
            where: { status: client_1.ProductStatus.PUBLISHED },
            include: productInclude,
            orderBy: { salesCount: 'desc' },
            take: limit,
        });
        return items.map((item) => this.mapProduct(item));
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: productInclude,
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product ${id} not found`);
        }
        return this.mapProduct(product);
    }
    async create(dto) {
        const { tagIds, images, ...data } = dto;
        const product = await this.prisma.product.create({
            data: {
                ...data,
                price: new client_1.Prisma.Decimal(data.price),
                compareAt: data.compareAt != null ? new client_1.Prisma.Decimal(data.compareAt) : undefined,
                imageUrls: images?.length ? images : undefined,
                tags: tagIds?.length
                    ? { create: tagIds.map((tagId) => ({ tagId })) }
                    : undefined,
            },
            include: productInclude,
        });
        return this.mapProduct(product);
    }
    async update(id, dto) {
        await this.findOne(id);
        const { tagIds, images, ...data } = dto;
        if (tagIds !== undefined) {
            await this.prisma.productTag.deleteMany({ where: { productId: id } });
        }
        const product = await this.prisma.product.update({
            where: { id },
            data: {
                ...data,
                ...(data.price != null && { price: new client_1.Prisma.Decimal(data.price) }),
                ...(data.compareAt != null && {
                    compareAt: new client_1.Prisma.Decimal(data.compareAt),
                }),
                ...(images !== undefined ? { imageUrls: images } : {}),
                ...(tagIds !== undefined && {
                    tags: { create: tagIds.map((tagId) => ({ tagId })) },
                }),
            },
            include: productInclude,
        });
        return this.mapProduct(product);
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.product.delete({ where: { id } });
        return { deleted: true };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map