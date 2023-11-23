import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SupportStaffService } from './support-staff.service';
import { SupportStaffController } from './support-staff.controller';
import { Property } from 'src/entities/property.entity'; // For regular login
import { SupportStaff } from 'src/entities/support-staff.entity'; // For support staff login

@Module({
  imports: [
    TypeOrmModule.forFeature([Property, SupportStaff]), // Include relevant entities
  ],
  controllers: [LoginController, SupportStaffController], // Include both controllers
  providers: [LoginService, SupportStaffService], // Include both services
})
export class AuthModule {}
