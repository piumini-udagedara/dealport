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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCardStats() {
        const now = new Date();
        const startOfToday = new Date(now);
        startOfToday.setHours(0, 0, 0, 0);
        const start7 = new Date(startOfToday);
        start7.setDate(start7.getDate() - 6);
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
            this.prisma.product.count({ where: { status: 'DRAFT' } }),
            this.prisma.product.count({ where: { status: 'PUBLISHED' } }),
        ]);
        return {
            totalSales: Number(current._sum.price ?? 0),
            totalSalesPrev: Number(previous._sum.price ?? 0),
            totalOrders: current._sum.salesCount ?? 0,
            totalOrdersPrev: previous._sum.salesCount ?? 0,
            pendingOrders: draft,
            canceledOrders: 0,
        };
    }
    async getStats() {
        const [totalProducts, stockProducts, outOfStock, revenueAgg] = await Promise.all([
            this.prisma.product.count(),
            this.prisma.product.count({ where: { stock: { gt: 0 } } }),
            this.prisma.product.count({ where: { stock: 0 } }),
            this.prisma.product.aggregate({
                _sum: { price: true },
            }),
        ]);
        const customers = await this.prisma.user.count();
        return {
            customers,
            totalProducts,
            stockProducts,
            outOfStock,
            revenue: Number(revenueAgg._sum.price ?? 0),
        };
    }
    async getWeeklyReport(week) {
        const now = new Date();
        const dayOfWeek = now.getDay();
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
        const totals = Object.fromEntries(days.map((d) => [d, 0]));
        for (const p of products) {
            const d = days[new Date(p.createdAt).getDay()];
            totals[d] += Number(p.price) * p.salesCount;
        }
        return days.map((day) => ({ day, sales: Math.round(totals[day]) }));
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map