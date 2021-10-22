import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './jwt-Payload.interface';
declare const UserStrategy_base: new (...args: any[]) => Strategy;
export declare class UserStrategy extends UserStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: JwtPayload): Promise<import(".prisma/client").User>;
}
export {};
