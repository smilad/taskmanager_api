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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../company/user.decorator");
const tasks_service_1 = require("../tasks/tasks.service");
const update_Task_dto_1 = require("./dto/update-Task.dto");
let UsersController = class UsersController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    updateTask(taskId, body) {
        return this.taskService.updateTask(taskId, body);
    }
    GetAllTask(user) {
        return this.taskService.getUserTask(user.id);
    }
};
__decorate([
    common_1.Post('update/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_Task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateTask", null);
__decorate([
    common_1.Get('task'),
    __param(0, user_decorator_1.user()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetAllTask", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.UseGuards(passport_1.AuthGuard('usr')),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map