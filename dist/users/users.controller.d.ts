import { TasksService } from 'src/tasks/tasks.service';
import { UpdateTaskDto } from './dto/update-Task.dto';
export declare class UsersController {
    private readonly taskService;
    constructor(taskService: TasksService);
    updateTask(taskId: any, body: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<import(".prisma/client").Task>;
    GetAllTask(user: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Task[]>;
}
