import { HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(company: any, createUserDto: CreateUserDto): Promise<{
        status: HttpStatus;
        param: {
            email: string;
            name: string;
            id: number;
        };
    }>;
    deleteUser(company: any, userid: any): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    getUsers(company: any): Promise<{
        data: {
            Users: {
                email: string;
                name: string;
                id: number;
                Tasks: import(".prisma/client").Task[];
            }[];
        }[];
    }>;
}
