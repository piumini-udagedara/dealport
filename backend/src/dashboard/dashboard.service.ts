import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface DaySales {
  day: string;
  sales: number;
}

export interface DashboardStats {
  customers: number;
  totalProducts: number;
  stockProducts: number;
  outOfStock: number;
  revenue: number;
}

export interface CardStats {
  totalSales: number;
  totalSalesPrev: number;
  totalOrders: number;
  totalOrdersPrev: number;
  pendingOrders: number;
  canceledOrders: number;
}

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getCardStats(): Promise<CardStats> {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    // Current 7-day window
    const start7 = new Date(startOfToday);
    start7.setDate(start7.getDate() - 6);

    // Previous 7-day window (days 8–14 ago)
    const startPrev7 = new Date(start7);
    startPrev7.setDate(startPrev7.getDate() - 7);
    const endPrev7 = new Date(start7);

    const [current, previous, draft, published] = await Promise.all([
      this.prisma.product.aggregate({
        where: { createdAt: { gte: start7 } },
        _sum: { price: true, salesCount: true },
      }),
      this.prisma.product.aggregate({
        where: { createdAt: { gte: startPrev7, lt: endPrev7 } },
        _sum: { price: true, salesCount: true },
      }),
      // DRAFT products as "pending" proxy (no Order model yet)
      this.prisma.product.count({ where: { status: 'DRAFT' } }),
      this.prisma.product.count({ where: { status: 'PUBLISHED' } }),
    ]);

    return {
      totalSales: Number(current._sum.price ?? 0),
      totalSalesPrev: Number(previous._sum.price ?? 0),
      totalOrders: current._sum.salesCount ?? 0,
      totalOrdersPrev: previous._sum.salesCount ?? 0,
      pendingOrders: draft,
      canceledOrders: 0, // no canceled status in schema yet
    };
  }

  async getStats(): Promise<DashboardStats> {    const [totalProducts, stockProducts, outOfStock, revenueAgg] =
      await Promise.all([
        this.prisma.product.count(),
        this.prisma.product.count({ where: { stock: { gt: 0 } } }),
        this.prisma.product.count({ where: { stock: 0 } }),
        this.prisma.product.aggregate({
          _sum: { price: true },
        }),
      ]);

    // User count as customer proxy (no dedicated Customer model yet)
    const customers = await this.prisma.user.count();

    return {
      customers,
      totalProducts,
      stockProducts,
      outOfStock,
      revenue: Number(revenueAgg._sum.price ?? 0),
    };
  }
  async getWeeklyReport(week: 'this' | 'last'): Promise<DaySales[]> {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sun
    const startOfThisWeek = new Date(now);
    startOfThisWeek.setDate(now.getDate() - dayOfWeek);
    startOfThisWeek.setHours(0, 0, 0, 0);

    const start = new Date(startOfThisWeek);
    const end = new Date(startOfThisWeek);
    end.setDate(start.getDate() + 7);

    if (week === 'last') {
      start.setDate(start.getDate() - 7);
      end.setDate(end.getDate() - 7);
    }

    const products = await this.prisma.product.findMany({
      where: { createdAt: { gte: start, lt: end } },
      select: { createdAt: true, price: true, salesCount: true },
    });

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const totals: Record<string, number> = Object.fromEntries(
      days.map((d) => [d, 0]),
    );

    for (const p of products) {
      const d = days[new Date(p.createdAt).getDay()];
      totals[d] += Number(p.price) * p.salesCount;
    }

    return days.map((day) => ({ day, sales: Math.round(totals[day]) }));
  }
}
