import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { SupportStaff } from 'src/entities/support-staff.entity';
import { QuestionaryAnswer } from 'src/entities/questionary-answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportStaff, QuestionaryAnswer])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
