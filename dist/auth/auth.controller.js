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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_credential_dto_1 = require("./dto/auth-credential.dto");
const create_company_dto_1 = require("./dto/create-company.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async singUp(createUserDto) {
        return await this.authService.createCompany(createUserDto);
    }
    async singIn(authCredetialDto) {
        return await this.authService.findCompany(authCredetialDto);
    }
    async singInUser(authCredetialDto) {
        return await this.authService.findUser(authCredetialDto);
    }
};
__decorate([
    common_1.Post('/singup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateComapanyDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singUp", null);
__decorate([
    common_1.Post('/singin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credential_dto_1.AuthCredential]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singIn", null);
__decorate([
    common_1.Post('/singin-user'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credential_dto_1.AuthCredential]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singInUser", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map