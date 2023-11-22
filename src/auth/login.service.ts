import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity'; // update the path as necessary
import { LoginRequest } from './dto/login-request.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async validateLogin(loginRequest: LoginRequest): Promise<boolean> {
    const { cfn, ecn } = loginRequest;
    const property = await this.propertyRepository.findOne({
      where: { cfn: cfn, ecn: ecn },
    });

    if (!property) {
      throw new NotFoundException('Invalid credentials');
    }

    return true;
  }
}
