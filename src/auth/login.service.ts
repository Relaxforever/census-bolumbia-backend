import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { LoginRequest } from './dto/login-request.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async validateLogin(loginRequest: LoginRequest): Promise<any> { // Change return type as needed
    const { cfn, ecn } = loginRequest;

    // Look for a Property record matching the login request
    const property = await this.propertyRepository.findOne({
      where: { cfn, ecn },
    });

    if (!property) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    // Return the property data or any other relevant data
    return property; // Adjust this to return the data you need
  }
}
