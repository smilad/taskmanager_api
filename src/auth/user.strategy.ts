import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './jwt-Payload.interface';

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy, 'usr') {
  constructor(private prisma: PrismaService) {
    super({
      secretOrKey: 'KingInTheNothHaio',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload) {
    const { email } = payload;
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('لطفا وارد اکانت خود شوید ');
    }
    return user;
  }
}
