import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionaryService } from './questionary.service';
import { QuestionaryController } from './questionary.controller';
import { QuestionaryAnswer } from 'src/entities/questionary-answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionaryAnswer])],
  controllers: [QuestionaryController],
  providers: [QuestionaryService],
})
export class QuestionaryModule {}
