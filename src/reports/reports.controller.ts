import { Controller, Post, Body } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { SupportStaffAuthDto } from './dto/support-staff-auth.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('generate')
  async generateReport(@Body() authDto: SupportStaffAuthDto) {
    return this.reportsService.generateReport(authDto);
  }
}
