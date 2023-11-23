import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionaryAnswer } from 'src/entities/questionary-answer.entity';
import { QuestionaryAnswerDto } from './dto/questionary-answer.dto';
import { UpdateFormStatusDto } from './dto/update-form-status.dto';
import { ServerResponse } from 'src/common/interfaces/server-response.interface';

@Injectable()
export class QuestionaryService {
  constructor(
    @InjectRepository(QuestionaryAnswer)
    private questionaryAnswerRepository: Repository<QuestionaryAnswer>,
  ) {}

  async saveAnswers(questionaryAnswerDto: QuestionaryAnswerDto): Promise<ServerResponse> {
    const { ecn, answers } = questionaryAnswerDto;

    // Find existing QuestionaryAnswer by ECN or create a new one
    let questionaryAnswer = await this.questionaryAnswerRepository.findOne({
      where: { property: { ecn } },
    });

    if (!questionaryAnswer) {
      questionaryAnswer = this.questionaryAnswerRepository.create({ property: { ecn } });
    }

    questionaryAnswer.answers = answers;
    //questionaryAnswer.isformcomplete = true;  // Assuming completion upon submission
    let savedQuestionary = await this.questionaryAnswerRepository.save(questionaryAnswer);
    return {
        status: 'success',
        statusCode: 200,
        message: 'Questionnaire answers saved successfully',
        data: savedQuestionary,
      };

  }


  async updateFormCompletionStatus(updateFormStatusDto: UpdateFormStatusDto): Promise<ServerResponse> {
    const { ecn } = updateFormStatusDto;
    const questionary = await this.questionaryAnswerRepository.findOne({ where: { property: { ecn } } });

    if (!questionary) {
      throw new NotFoundException(`Questionary with ECN '${ecn}' not found`);
    }

    questionary.isformcomplete = true;
    let updatedQuestionary = await this.questionaryAnswerRepository.save(questionary);

    return {
        status: 'success',
        statusCode: 200,
        message: 'Form completion status updated',
        data: updatedQuestionary,
      };

  }
}
