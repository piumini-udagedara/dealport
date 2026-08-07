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
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getCardStats(): Promise<CardStats>;
    getStats(): Promise<DashboardStats>;
    getWeeklyReport(week: 'this' | 'last'): Promise<DaySales[]>;
}
