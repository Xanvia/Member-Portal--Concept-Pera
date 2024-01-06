import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env['SECRET'],
    });
  }

  async validate(payload: any) {
    try {
      if (!payload.userId) {
        throw new Error('Invalid payload: Missing userId');
      }

      return { userId: payload.userId };
    } catch (error) {
      throw new UnauthorizedException('Invalid token', error.message);
    }
  }
}
