// user.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';
import { CreateUserDto } from './user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = new this.userModel({
      ...user,
      password: hashedPassword,
    });
    return createdUser.save();
  }
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      return user;
    } catch (error) {
      throw new NotFoundException('User not found.');
    }
  }

  async verifyPassword(
    enteredPassword: string,
    storedPassword: string,
  ): Promise<boolean> {
    const isPasswordValid = await bcrypt.compare(
      enteredPassword,
      storedPassword,
    );
    return isPasswordValid;
  }
}
