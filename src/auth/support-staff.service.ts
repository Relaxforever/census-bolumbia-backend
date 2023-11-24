import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportStaff } from 'src/entities/support-staff.entity';
import { SupportStaffLoginRequestDto } from './dto/support-staff-login-request.dto';
import { ServerResponse } from 'src/common/interfaces/server-response.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SupportStaffService {
  constructor(
    @InjectRepository(SupportStaff)
    private supportStaffRepository: Repository<SupportStaff>,
    private jwtService: JwtService
  ) {}

  async validateSupportStaffLogin(loginDto: SupportStaffLoginRequestDto): Promise<ServerResponse> {
    const { ss_email, ss_password } = loginDto;
    const supportStaff = await this.supportStaffRepository.findOne({
      where: { ss_email, ss_password }, // In a real-world scenario, the password should be hashed
    });
    if (supportStaff){
      
      const payload = { 
        ecn: supportStaff.ss_email, 
        cfn: supportStaff.ss_password 
        // Include any other properties you need in the token
      };
      const access_token = this.jwtService.sign(payload);
      return {
        status: 'success',
        statusCode: 200,
        message: 'Login successful',
        data: { supportStaffdata: supportStaff, "token": access_token },
      };
    }

    if (!supportStaff) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    /*return {
      status: 'success',
      statusCode: 200,
      message: 'Login successful',
      data: { id: supportStaff.idsupportstaff },
    };*/
  }
}
