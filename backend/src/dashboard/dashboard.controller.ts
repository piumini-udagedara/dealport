import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('card-stats')
  getCardStats() {
    return this.dashboardService.getCardStats();
  }

  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }

  @Get('weekly-report')
  getWeeklyReport(@Query('week') week: 'this' | 'last' = 'this') {
    return this.dashboardService.getWeeklyReport(week);
  }
}
