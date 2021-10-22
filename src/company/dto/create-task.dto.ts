import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TaskStatus } from './task-status';

export class CreateTaskDto {
  @IsString()
  subject: string;
  @IsString()
  description: string;
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
