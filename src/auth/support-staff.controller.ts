import { Controller, Post, Body } from '@nestjs/common';
import { SupportStaffService } from './support-staff.service';
import { SupportStaffLoginRequestDto } from './dto/support-staff-login-request.dto';

@Controller('auth')
export class SupportStaffController {
  constructor(private readonly supportStaffService: SupportStaffService) {}

  @Post('support-staff-login')
  async login(@Body() loginDto: SupportStaffLoginRequestDto): Promise<any> {
    return this.supportStaffService.validateSupportStaffLogin(loginDto);
  }
}
