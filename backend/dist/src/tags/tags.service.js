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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let TagsService = class TagsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Tag name already exists');
            }
        }
        throw error;
    }
    async findAll() {
        return this.prisma.tag.findMany({ orderBy: { name: 'asc' } });
    }
    async findOne(id) {
        const tag = await this.prisma.tag.findUnique({ where: { id } });
        if (!tag) {
            throw new common_1.NotFoundException(`Tag ${id} not found`);
        }
        return tag;
    }
    async create(dto) {
        try {
            return await this.prisma.tag.create({
                data: { name: dto.name.trim() },
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.prisma.tag.update({
                where: { id },
                data: { name: dto.name?.trim() },
            });
        }
        catch (error) {
            this.handlePrismaError(error);
        }
    }
    async remove(id) {
        await this.findOne(id);
        const linkedCount = await this.prisma.productTag.count({
            where: { tagId: id },
        });
        if (linkedCount > 0) {
            throw new common_1.ConflictException('Cannot delete tag linked to products');
        }
        await this.prisma.tag.delete({ where: { id } });
        return { deleted: true };
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagsService);
//# sourceMappingURL=tags.service.js.map