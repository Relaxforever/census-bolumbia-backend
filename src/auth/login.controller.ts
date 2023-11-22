import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginRequest } from './dto/login-request.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequest: LoginRequest): Promise<{ message: string }> {
    await this.loginService.validateLogin(loginRequest);
    return { message: 'Login successful' };
  }
}
