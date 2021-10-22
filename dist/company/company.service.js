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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let CompanyService = class CompanyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(company, createUserDto) {
        const { email, password, name } = createUserDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
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
            return { status: common_1.HttpStatus.CREATED, param: newUser };
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_3.ConflictException('ایمیل قبلا گرفته شده');
            }
            else {
                throw new common_2.InternalServerErrorException();
            }
        }
    }
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
            return { status: common_1.HttpStatus.OK, message: 'کاربر پاک شد' };
        }
        catch (error) {
            throw new common_1.NotFoundException();
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
};
CompanyService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map