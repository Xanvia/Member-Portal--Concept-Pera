// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}
