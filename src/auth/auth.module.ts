import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SupportStaffService } from './support-staff.service';
import { SupportStaffController } from './support-staff.controller';
import { Property } from 'src/entities/property.entity'; // For regular login
import { SupportStaff } from 'src/entities/support-staff.entity'; // For support staff login
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Property, SupportStaff]), // Include relevant entities
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
  ],
  controllers: [LoginController, SupportStaffController], // Include both controllers
  providers: [JwtStrategy, LoginService, SupportStaffService], // Include both services
})
export class AuthModule {}
