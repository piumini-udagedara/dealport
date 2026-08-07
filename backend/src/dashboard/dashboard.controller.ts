import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@ApiTags('dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('card-stats')
  @ApiOperation({ summary: 'Get dashboard card statistics' })
  @ApiResponse({ status: 200, description: 'Card statistics returned successfully' })
  getCardStats() {
    return this.dashboardService.getCardStats();
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get dashboard summary statistics' })
  @ApiResponse({ status: 200, description: 'Summary statistics returned successfully' })
  getStats() {
    return this.dashboardService.getStats();
  }

  @Get('weekly-report')
  @ApiOperation({ summary: 'Get weekly sales report' })
  @ApiQuery({ name: 'week', required: false, enum: ['this', 'last'] })
  @ApiResponse({ status: 200, description: 'Weekly report returned successfully' })
  getWeeklyReport(@Query('week') week: 'this' | 'last' = 'this') {
    return this.dashboardService.getWeeklyReport(week);
  }
}
