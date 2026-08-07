import '../scripts/load-env';
import { PrismaClient, ProductStatus, UserRole } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@dealport.com' },
    update: {},
    create: {
      email: 'admin@dealport.com',
      password,
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  });

  const categories = await Promise.all(
    [
      { name: 'Electronics', slug: 'electronics' },
      { name: 'Fashion', slug: 'fashion' },
      { name: 'Home', slug: 'home' },
      { name: 'Sports', slug: 'sports' },
      { name: 'Books', slug: 'books' },
    ].map((cat) =>
      prisma.category.upsert({
        where: { slug: cat.slug },
        update: {},
        create: cat,
      }),
    ),
  );

  const tags = await Promise.all(
    ['New Arrival', 'Best Seller', 'Limited', 'Sale'].map((name) =>
      prisma.tag.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  const electronics = categories.find((c) => c.slug === 'electronics')!;
  const fashion = categories.find((c) => c.slug === 'fashion')!;
  const home = categories.find((c) => c.slug === 'home')!;
  const sports = categories.find((c) => c.slug === 'sports')!;
  const books = categories.find((c) => c.slug === 'books')!;

  const products = [
    // Electronics
    {
      name: 'Wireless Headphones Pro',
      description: 'Premium noise-cancelling wireless headphones.',
      sku: 'WH-PRO-001',
      price: 199.99,
      compareAt: 249.99,
      stock: 120,
      status: ProductStatus.PUBLISHED,
      salesCount: 842,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      categoryId: electronics.id,
      tagIds: [tags[1].id],
    },
    {
      name: 'Smart Watch Series X',
      description: 'Fitness tracking smartwatch with AMOLED display.',
      sku: 'SW-X-002',
      price: 299.0,
      compareAt: 349.0,
      stock: 85,
      status: ProductStatus.PUBLISHED,
      salesCount: 615,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      categoryId: electronics.id,
      tagIds: [tags[0].id, tags[1].id],
    },
    {
      name: 'Bluetooth Speaker Mini',
      description: 'Portable waterproof speaker.',
      sku: 'BSM-005',
      price: 59.99,
      stock: 300,
      status: ProductStatus.PUBLISHED,
      salesCount: 290,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
      categoryId: electronics.id,
    },
    {
      name: 'USB-C Laptop Stand',
      description: 'Adjustable aluminum laptop stand with USB hub.',
      sku: 'LS-USB-007',
      price: 79.99,
      stock: 180,
      status: ProductStatus.PUBLISHED,
      salesCount: 510,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      categoryId: electronics.id,
      tagIds: [tags[0].id],
    },
    {
      name: 'Mechanical Gaming Keyboard',
      description: 'RGB backlit mechanical keyboard, Cherry MX switches.',
      sku: 'MGK-008',
      price: 129.0,
      compareAt: 149.0,
      stock: 75,
      status: ProductStatus.PUBLISHED,
      salesCount: 389,
      imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400',
      categoryId: electronics.id,
      tagIds: [tags[3].id],
    },
    {
      name: '4K Webcam Ultra',
      description: 'Ultra-HD webcam with auto-focus and noise-cancelling mic.',
      sku: 'WC-4K-009',
      price: 149.99,
      stock: 60,
      status: ProductStatus.PUBLISHED,
      salesCount: 221,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      categoryId: electronics.id,
    },
    // Fashion
    {
      name: 'Classic Leather Jacket',
      description: 'Genuine leather jacket for all seasons.',
      sku: 'CLJ-003',
      price: 189.5,
      stock: 45,
      status: ProductStatus.PUBLISHED,
      salesCount: 402,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      categoryId: fashion.id,
      tagIds: [tags[2].id],
    },
    {
      name: 'Running Sneakers Ultra',
      description: 'Lightweight running shoes with cushioned sole.',
      sku: 'RSU-004',
      price: 129.99,
      compareAt: 159.99,
      stock: 200,
      status: ProductStatus.PUBLISHED,
      salesCount: 378,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      categoryId: fashion.id,
      tagIds: [tags[3].id],
    },
    {
      name: 'Slim Fit Chinos',
      description: 'Comfortable stretch chinos available in 6 colours.',
      sku: 'SFC-010',
      price: 49.99,
      stock: 320,
      status: ProductStatus.PUBLISHED,
      salesCount: 743,
      imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400',
      categoryId: fashion.id,
      tagIds: [tags[1].id],
    },
    {
      name: 'Oversized Hoodie',
      description: 'Premium cotton fleece hoodie.',
      sku: 'OH-011',
      price: 64.99,
      compareAt: 79.99,
      stock: 150,
      status: ProductStatus.PUBLISHED,
      salesCount: 558,
      imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400',
      categoryId: fashion.id,
      tagIds: [tags[3].id],
    },
    {
      name: 'Crossbody Leather Bag',
      description: 'Genuine leather crossbody bag, multiple compartments.',
      sku: 'CLB-012',
      price: 89.0,
      stock: 90,
      status: ProductStatus.PUBLISHED,
      salesCount: 315,
      imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
      categoryId: fashion.id,
    },
    // Home
    {
      name: 'Ceramic Coffee Mug Set',
      description: 'Set of 4 hand-crafted ceramic mugs.',
      sku: 'CCM-013',
      price: 34.99,
      stock: 250,
      status: ProductStatus.PUBLISHED,
      salesCount: 674,
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
      categoryId: home.id,
      tagIds: [tags[1].id],
    },
    {
      name: 'Smart LED Desk Lamp',
      description: 'Touch-control LED lamp with wireless charging base.',
      sku: 'SDL-014',
      price: 55.0,
      compareAt: 69.99,
      stock: 130,
      status: ProductStatus.PUBLISHED,
      salesCount: 482,
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
      categoryId: home.id,
      tagIds: [tags[0].id],
    },
    {
      name: 'Bamboo Cutting Board',
      description: 'Eco-friendly large bamboo cutting board.',
      sku: 'BCB-015',
      price: 29.99,
      stock: 400,
      status: ProductStatus.PUBLISHED,
      salesCount: 290,
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400',
      categoryId: home.id,
    },
    // Sports
    {
      name: 'Yoga Mat Premium',
      description: 'Non-slip 6mm thick yoga mat with carry strap.',
      sku: 'YMP-016',
      price: 44.99,
      stock: 280,
      status: ProductStatus.PUBLISHED,
      salesCount: 601,
      imageUrl: 'https://images.unsplash.com/photo-1601925228009-f3291ff5c78e?w=400',
      categoryId: sports.id,
      tagIds: [tags[1].id],
    },
    {
      name: 'Resistance Band Set',
      description: 'Set of 5 resistance bands with handles.',
      sku: 'RBS-017',
      price: 24.99,
      stock: 500,
      status: ProductStatus.PUBLISHED,
      salesCount: 819,
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      categoryId: sports.id,
      tagIds: [tags[1].id, tags[3].id],
    },
    {
      name: 'Insulated Water Bottle',
      description: '1L stainless steel insulated water bottle.',
      sku: 'IWB-018',
      price: 32.0,
      stock: 350,
      status: ProductStatus.PUBLISHED,
      salesCount: 467,
      imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400',
      categoryId: sports.id,
    },
    // Books
    {
      name: 'Clean Code (Robert Martin)',
      description: 'A handbook of agile software craftsmanship.',
      sku: 'BK-CC-019',
      price: 38.0,
      stock: 200,
      status: ProductStatus.PUBLISHED,
      salesCount: 344,
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
      categoryId: books.id,
      tagIds: [tags[1].id],
    },
    {
      name: 'Atomic Habits',
      description: 'Tiny changes, remarkable results.',
      sku: 'BK-AH-020',
      price: 26.99,
      stock: 175,
      status: ProductStatus.PUBLISHED,
      salesCount: 912,
      imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
      categoryId: books.id,
      tagIds: [tags[1].id, tags[0].id],
    },
    // Draft
    {
      name: 'Draft Product Sample',
      description: 'Unpublished product for draft testing.',
      sku: 'DRAFT-006',
      price: 49.99,
      stock: 10,
      status: ProductStatus.DRAFT,
      salesCount: 0,
      categoryId: electronics.id,
    },
  ];

  for (const { tagIds, ...product } of products) {
    const existing = await prisma.product.findUnique({
      where: { sku: product.sku },
    });
    if (existing) continue;

    await prisma.product.create({
      data: {
        ...product,
        tags: tagIds?.length
          ? { create: tagIds.map((tagId) => ({ tagId })) }
          : undefined,
      },
    });
  }

  console.log('Seed complete');
  console.log('Admin login:', admin.email, '/ admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
