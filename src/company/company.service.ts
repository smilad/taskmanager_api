import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  // cretare a user by company
  async createUser(company, createUserDto: CreateUserDto) {
    const { email, password, name } = createUserDto;
    //hash
    const salt = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);

    try {
      const newUser = await this.prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          CompId: company.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      return { status: HttpStatus.CREATED, param: newUser };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('ایمیل قبلا گرفته شده');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  // delete user
  async deleteUser(company, userid) {
    try {
      const t = await this.prisma.user.delete({
        where: {
          id_CompId: {
            id: userid,
            CompId: company.id,
          },
        },
      });

      return { status: HttpStatus.OK, message: 'کاربر پاک شد' };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async getUsers(company) {
    const users = await this.prisma.company.findMany({
      where: {
        id: company.id,
      },
      select: {
        Users: {
          select: {
            id: true,
            name: true,
            email: true,
            Tasks: true,
          },
        },
      },
    });
    return { data: users };
  }
}
