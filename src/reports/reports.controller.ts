import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { SupportStaffAuthDto } from './dto/support-staff-auth.dto';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard('jwt')) 
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('generate')
  async generateReport(@Body() authDto: SupportStaffAuthDto) {
    return this.reportsService.generateReport(authDto);
  }
}
