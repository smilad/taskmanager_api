import { CreateTaskDto } from 'src/company/dto/create-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTask(company: any, createTaskDto: CreateTaskDto, userId: number): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    updateTask(taskId: any, status: any): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    getUserTask(id: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
    getCompanyTask(id: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
}
