import { PrismaService } from 'src/prisma/prisma.service';
import { AuthCredential } from './dto/auth-credential.dto';
import { CreateComapanyDto } from './dto/create-company.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    createCompany(CreateCompanyDto: CreateComapanyDto): Promise<any>;
    findCompany(authcredentialdto: AuthCredential): Promise<{
        accessToken: string;
        company: any;
    }>;
    findUser(authcredentialdto: AuthCredential): Promise<{
        accessToken: string;
        user: any;
    }>;
}
