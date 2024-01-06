import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/utils/jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '3d' },
      secret: process.env['SECRET'],
    }),
  ],
  controllers: [AuthController],

  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
