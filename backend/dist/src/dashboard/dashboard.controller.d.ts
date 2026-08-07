import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getCardStats(): Promise<import("./dashboard.service").CardStats>;
    getStats(): Promise<import("./dashboard.service").DashboardStats>;
    getWeeklyReport(week?: 'this' | 'last'): Promise<import("./dashboard.service").DaySales[]>;
}
