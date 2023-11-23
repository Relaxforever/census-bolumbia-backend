import { Controller, Post, Body, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryAnswerDto } from './dto/questionary-answer.dto';
import { UpdateFormStatusDto } from './dto/update-form-status.dto';
import { ServerResponse } from 'src/common/interfaces/server-response.interface';

@Controller('questionary')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Post('save-answers')
  async saveAnswers(@Body() questionaryAnswerDto: QuestionaryAnswerDto): Promise<ServerResponse> {
    return this.questionaryService.saveAnswers(questionaryAnswerDto);
  }

  @Patch('update-status')
  async updateFormStatus(@Body() updateFormStatusDto: UpdateFormStatusDto): Promise<ServerResponse> {
    return this.questionaryService.updateFormCompletionStatus(updateFormStatusDto);
  }
}
