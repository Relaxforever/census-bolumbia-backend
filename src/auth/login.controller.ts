import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginRequest } from './dto/login-request.dto';
import { ServerResponse } from 'src/common/interfaces/server-response.interface';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(@Body() loginRequest: LoginRequest): Promise<ServerResponse> {
    try {
      const data = await this.loginService.validateLogin(loginRequest);
      return {
        status: 'success',
        statusCode: HttpStatus.OK,
        message: 'Login successful',
        data: data, // or just the necessary data
      };
    } catch (error) {
      return {
        status: 'error',
        statusCode: HttpStatus.UNAUTHORIZED, // or error status based on the exception
        message: error.message,
        data: null, // or additional error details
      };
    }
  }
}
