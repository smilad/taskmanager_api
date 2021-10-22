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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const tasks_service_1 = require("../tasks/tasks.service");
const company_service_1 = require("./company.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_decorator_1 = require("./user.decorator");
let CompanyController = class CompanyController {
    constructor(companyService, taskService) {
        this.companyService = companyService;
        this.taskService = taskService;
    }
    createUser(company, createUserDto) {
        return this.companyService.createUser(company, createUserDto);
    }
    delete(company, userId) {
        return this.companyService.deleteUser(company, userId);
    }
    getAllUsers(company) {
        return this.companyService.getUsers(company);
    }
    addTask(company, createTaskDto, userId) {
        return this.taskService.createTask(company, createTaskDto, userId);
    }
};
__decorate([
    common_1.Post('/user'),
    __param(0, user_decorator_1.user()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "createUser", null);
__decorate([
    common_1.Delete('/del/:id'),
    __param(0, user_decorator_1.user()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "delete", null);
__decorate([
    common_1.Get('/users'),
    __param(0, user_decorator_1.user()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "getAllUsers", null);
__decorate([
    common_1.Post('/add/TaskTo/:id'),
    __param(0, user_decorator_1.user()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDto, Number]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "addTask", null);
CompanyController = __decorate([
    common_1.Controller('company'),
    common_1.UseGuards(passport_1.AuthGuard('cmp')),
    __metadata("design:paramtypes", [company_service_1.CompanyService,
        tasks_service_1.TasksService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map