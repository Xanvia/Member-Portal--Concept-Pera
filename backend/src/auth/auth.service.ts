// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: User): Promise<{ token: string; user: User }> {
    const createdUser = await this.userService.createUser(user);
    const token = await this.jwtService.signAsync({
      userId: createdUser.firstName,
    });
    return { token, user: createdUser };
  }
}
