import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  private toSlug(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ConflictException('Category with same name or slug already exists');
      }
    }
    throw error;
  }

  async findAll() {
    return this.prisma.category.findMany({ orderBy: { name: 'asc' } });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return category;
  }

  async create(dto: CreateCategoryDto) {
    const slug = dto.slug ? this.toSlug(dto.slug) : this.toSlug(dto.name);
    if (!slug) {
      throw new BadRequestException('Slug cannot be empty');
    }

    try {
      return await this.prisma.category.create({
        data: {
          name: dto.name.trim(),
          slug,
        },
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async update(id: string, dto: UpdateCategoryDto) {
    await this.findOne(id);

    const data: Prisma.CategoryUpdateInput = {};

    if (dto.name !== undefined) {
      data.name = dto.name.trim();
    }

    if (dto.slug !== undefined) {
      const slug = this.toSlug(dto.slug);
      if (!slug) {
        throw new BadRequestException('Slug cannot be empty');
      }
      data.slug = slug;
    }

    if (dto.slug === undefined && dto.name !== undefined) {
      const generated = this.toSlug(dto.name);
      if (!generated) {
        throw new BadRequestException('Slug cannot be empty');
      }
      data.slug = generated;
    }

    try {
      return await this.prisma.category.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    const productsCount = await this.prisma.product.count({
      where: { categoryId: id },
    });

    if (productsCount > 0) {
      throw new ConflictException('Cannot delete category with existing products');
    }

    await this.prisma.category.delete({ where: { id } });
    return { deleted: true };
  }
}
