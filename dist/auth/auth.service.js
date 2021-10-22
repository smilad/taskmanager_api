"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async createCompany(CreateCompanyDto) {
        const { email, password, name, inviteKey } = CreateCompanyDto;
        if (inviteKey !== 'Talab_gavkhoni') {
            throw new common_1.UnauthorizedException('شما اجازه شاخت ندارید .');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
            await this.prisma.company.create({
                data: {
                    email,
                    name,
                    password: hashedPassword,
                },
            });
            return { status: 201, message: 'ساخته شد' };
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('ایمیل قبلا گرفته شده');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async findCompany(authcredentialdto) {
        const { email, password } = authcredentialdto;
        const payload = { email };
        const company = await this.prisma.company.findUnique({
            where: {
                email,
            },
        });
        if (company && (await bcrypt.compare(password, company.password))) {
            const accessToken = await this.jwt.sign(payload);
            return {
                accessToken,
                company: { name: company.name, email: company.email },
            };
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async findUser(authcredentialdto) {
        const { email, password } = authcredentialdto;
        const payload = { email };
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = this.jwt.sign(payload);
            return { accessToken, user: { email: user.email, name: user.name } };
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map