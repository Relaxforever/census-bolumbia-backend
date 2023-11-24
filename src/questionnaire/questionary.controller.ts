import { Controller, Post, Body, HttpCode, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { QuestionaryService } from './questionary.service';
import { QuestionaryAnswerDto } from './dto/questionary-answer.dto';
import { UpdateFormStatusDto } from './dto/update-form-status.dto';
import { ServerResponse } from 'src/common/interfaces/server-response.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt')) 
@Controller('questionary')
export class QuestionaryController {
  constructor(private readonly questionaryService: QuestionaryService) {}

  @Post('save-answers')
  async saveAnswers(@Body() questionaryAnswerDto: QuestionaryAnswerDto): Promise<ServerResponse> {
    return this.questionaryService.saveAnswers(questionaryAnswerDto);
  }

  @Post('update-status')
  async updateFormStatus(@Body() updateFormStatusDto: UpdateFormStatusDto): Promise<ServerResponse> {
    return this.questionaryService.updateFormCompletionStatus(updateFormStatusDto);
  }
}
