import {
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { AuthCredential } from './dto/auth-credential.dto';
import { CreateComapanyDto } from './dto/create-company.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-Payload.interface';
import { Company, User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  /** create company in table  **/
  async createCompany(CreateCompanyDto: CreateComapanyDto): Promise<any> {
    const { email, password, name, inviteKey } = CreateCompanyDto;
    if (inviteKey !== 'Talab_gavkhoni') {
      throw new UnauthorizedException('شما اجازه شاخت ندارید .');
    }

    //hash
    const salt = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);

    try {
      await this.prisma.company.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });
      return { status: 201, message: 'ساخته شد' };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('ایمیل قبلا گرفته شده');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  /** find comapny in table  **/
  async findCompany(
    authcredentialdto: AuthCredential,
  ): Promise<{ accessToken: string; company: any }> {
    const { email, password } = authcredentialdto;
    const payload: JwtPayload = { email };

    const company = await this.prisma.company.findUnique({
      where: {
        email,
      },
    });
    if (company && (await bcrypt.compare(password, company.password))) {
      const accessToken: string = await this.jwt.sign(payload);
      return {
        accessToken,
        company: { name: company.name, email: company.email },
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  /** find user in table  **/
  async findUser(
    authcredentialdto: AuthCredential,
  ): Promise<{ accessToken: string; user: any }> {
    const { email, password } = authcredentialdto;
    const payload: JwtPayload = { email };
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = this.jwt.sign(payload);
      return { accessToken, user: { email: user.email, name: user.name } };
    } else {
      throw new UnauthorizedException();
    }
  }
}
