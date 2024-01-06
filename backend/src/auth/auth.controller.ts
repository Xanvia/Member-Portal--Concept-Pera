// auth.controller.ts
import { Controller, Post, Body, HttpStatus, Res,UsePipes,ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() user: User, @Res() res: Response): Promise<void> {
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
