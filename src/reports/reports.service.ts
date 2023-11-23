import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportStaff } from 'src/entities/support-staff.entity';
import { QuestionaryAnswer } from 'src/entities/questionary-answer.entity';
import { SupportStaffAuthDto } from './dto/support-staff-auth.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(SupportStaff)
    private supportStaffRepository: Repository<SupportStaff>,
    @InjectRepository(QuestionaryAnswer)
    private questionaryAnswerRepository: Repository<QuestionaryAnswer>,
  ) {}

  async generateReport(authDto: SupportStaffAuthDto): Promise<any> {
    const { ss_email, ss_password } = authDto;
    const supportStaff = await this.supportStaffRepository.findOne({
      where: { ss_email, ss_password },
    });

    if (!supportStaff) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Fetch properties with completed questionnaires
    const completedProperties = await this.questionaryAnswerRepository.find({
      where: { isformcomplete: true },
      relations: ['property'], // assuming you have a relation set up with the property
    });

    return completedProperties;
  }
}
