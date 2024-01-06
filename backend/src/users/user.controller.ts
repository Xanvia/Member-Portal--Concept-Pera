// user.controller.ts
import {
  Controller,
  Get,
  HttpStatus,
  Res,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(@Res() res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Users retrieved successfully',
        data: users,
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
