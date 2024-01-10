import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/user.schema';
import { CreateUserDto } from 'src/users/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: CreateUserDto): Promise<{ token: string; user: User }> {
    try {
      const createdUser = await this.userService.createUser(user);
      const token = await this.jwtService.signAsync({
        userId: createdUser.firstName,
      });
      return { token, user: createdUser };
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          'Email is already in use. Please choose a different email.',
        );
      } else if (error.name === 'ValidationError') {
        throw new BadRequestException(
          'Validation error. Please provide valid data for registration.',
        );
      } else {
        throw new InternalServerErrorException('Internal server error');
      }
    }
  }
}
