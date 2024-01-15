import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
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
        userId: createdUser.id,
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

  async login(
    email: string,
    password: string,
  ): Promise<{ token: string}> {
    try {
      const user = await this.userService.findUserByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found.');
      }
      const isPasswordValid = await this.userService.verifyPassword(
        password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid password.');
      }

      const token = await this.jwtService.signAsync({ userId: user.id });

      return { token };
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
