import { IsEnum } from 'class-validator';
import { TaskStatus } from 'src/company/dto/task-status';

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
