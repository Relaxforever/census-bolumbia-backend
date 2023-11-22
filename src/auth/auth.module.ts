import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Property } from 'src/entities/property.entity'; // update the path as necessary

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AuthModule {}
