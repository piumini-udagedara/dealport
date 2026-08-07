import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ProductStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductsDto } from './dto/query-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const productInclude = {
  category: true,
  tags: { include: { tag: true } },
} satisfies Prisma.ProductInclude;

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  private mapProduct(product: Prisma.ProductGetPayload<{ include: typeof productInclude }>) {
    return {
      ...product,
      price: Number(product.price),
      compareAt: product.compareAt ? Number(product.compareAt) : null,
      tags: product.tags.map((pt) => pt.tag),
    };
  }

  async findAll(query: QueryProductsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy ?? 'createdAt';
    const sortOrder = query.sortOrder ?? 'desc';

    const where: Prisma.ProductWhereInput = {
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
      where: { status: ProductStatus.PUBLISHED },
      include: productInclude,
      orderBy: { salesCount: 'desc' },
      take: limit,
    });
    return items.map((item) => this.mapProduct(item));
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: productInclude,
    });
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.mapProduct(product);
  }

  async create(dto: CreateProductDto) {
    const { tagIds, images, ...data } = dto;
    const product = await this.prisma.product.create({
      data: {
        ...data,
        price: new Prisma.Decimal(data.price),
        compareAt: data.compareAt != null ? new Prisma.Decimal(data.compareAt) : undefined,
        imageUrls: images?.length ? images : undefined,
        tags: tagIds?.length
          ? { create: tagIds.map((tagId) => ({ tagId })) }
          : undefined,
      },
      include: productInclude,
    });
    return this.mapProduct(product);
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    const { tagIds, images, ...data } = dto;

    if (tagIds !== undefined) {
      await this.prisma.productTag.deleteMany({ where: { productId: id } });
    }

    const product = await this.prisma.product.update({
      where: { id },
      data: {
        ...data,
        ...(data.price != null && { price: new Prisma.Decimal(data.price) }),
        ...(data.compareAt != null && {
          compareAt: new Prisma.Decimal(data.compareAt),
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

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.product.delete({ where: { id } });
    return { deleted: true };
  }
}
