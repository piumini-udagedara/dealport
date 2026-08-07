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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    toSlug(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Category with same name or slug already exists');
            }
        }
        throw error;
    }
    async findAll() {
        return this.prisma.category.findMany({ orderBy: { name: 'asc' } });
    }
    async findOne(id) {
        const category = await this.prisma.category.findUnique({ where: { id } });
        if (!category) {
            throw new common_1.NotFoundException(`Category ${id} not found`);
        }
        return category;
    }
    async create(dto) {
        const slug = dto.slug ? this.toSlug(dto.slug) : this.toSlug(dto.name);
        if (!slug) {
            throw new common_1.BadRequestException('Slug cannot be empty');
        }
        try {
            return await this.prisma.category.create({
                data: {
                    name: dto.name.trim(),
                    slug,
                },
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = {};
        if (dto.name !== undefined) {
            data.name = dto.name.trim();
        }
        if (dto.slug !== undefined) {
            const slug = this.toSlug(dto.slug);
            if (!slug) {
                throw new common_1.BadRequestException('Slug cannot be empty');
            }
            data.slug = slug;
        }
        if (dto.slug === undefined && dto.name !== undefined) {
            const generated = this.toSlug(dto.name);
            if (!generated) {
                throw new common_1.BadRequestException('Slug cannot be empty');
            }
            data.slug = generated;
        }
        try {
            return await this.prisma.category.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async remove(id) {
        await this.findOne(id);
        const productsCount = await this.prisma.product.count({
            where: { categoryId: id },
        });
        if (productsCount > 0) {
            throw new common_1.ConflictException('Cannot delete category with existing products');
        }
        await this.prisma.category.delete({ where: { id } });
        return { deleted: true };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map