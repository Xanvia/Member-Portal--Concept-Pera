// auth.controller.ts
import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  UsePipes,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/user.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(
    @Body() credentials: { email: string; password: string },
    @Res() res: Response,
  ): Promise<void> {
    try {
      const { email, password } = credentials;
      const loggedInUser = await this.authService.login(email, password);
      res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'User logged in successfully',
        token: loggedInUser.token,
      });
    } catch (error) {
      const status =
        error instanceof UnauthorizedException
          ? HttpStatus.UNAUTHORIZED
          : HttpStatus.INTERNAL_SERVER_ERROR;

      res.status(status).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(
    @Body() user: CreateUserDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const registeredUser = await this.authService.register(user);
      res.status(HttpStatus.CREATED).json({
        status: 'success',
        message: 'User registered successfully',
        data: registeredUser,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Internal server error',
        error: error.message,
      });
    }
  }
}
