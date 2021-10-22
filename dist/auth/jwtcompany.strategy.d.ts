import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './jwt-Payload.interface';
declare const CompanyStrategy_base: new (...args: any[]) => Strategy;
export declare class CompanyStrategy extends CompanyStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: JwtPayload): Promise<import(".prisma/client").Company>;
}
export {};
