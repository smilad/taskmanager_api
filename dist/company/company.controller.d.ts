import { TasksService } from 'src/tasks/tasks.service';
import { CompanyService } from './company.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class CompanyController {
    private companyService;
    private taskService;
    constructor(companyService: CompanyService, taskService: TasksService);
    createUser(company: any, createUserDto: CreateUserDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        param: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    delete(company: any, userId: number): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    getAllUsers(company: any): Promise<{
        data: {
            Users: {
                id: number;
                name: string;
                email: string;
                Tasks: import(".prisma/client").Task[];
            }[];
        }[];
    }>;
    addTask(company: any, createTaskDto: CreateTaskDto, userId: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
}
