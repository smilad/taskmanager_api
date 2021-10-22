import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './jwt-Payload.interface';

@Injectable()
export class CompanyStrategy extends PassportStrategy(Strategy, 'cmp') {
  constructor(private prisma: PrismaService) {
    super({
      secretOrKey: 'KingInTheNothHaio',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload) {
    const { email } = payload;
    const company = await this.prisma.company.findUnique({ where: { email } });
    if (!company) {
      throw new UnauthorizedException('لطفا وارد اکانت خود شوید ');
    }
    return company;
  }
}
