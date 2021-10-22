import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/company/dto/create-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  //create task
  createTask(company, createTaskDto: CreateTaskDto, userId: number) {
    const { subject, status, description } = createTaskDto;
    const task = this.prisma.task.create({
      data: {
        subject,
        description,
        status,
        UsrId: userId,
        CompId: company.id,
      },
    });
    return task;
  }

  // update tasks
  updateTask(taskId, status) {
    const uptask = this.prisma.task.update({
          where: {
        id: taskId,
      },
      data: status
  
    });
    // return { status: HttpStatus.CREATED, message: 'تسک اپدیت شد', new : uptask };
    return uptask
  }

  getUserTask(id) {
    const userTask = this.prisma.task.findMany({
      where: {
        UsrId: id,
      },
    });
    return userTask;
  }

  getCompanyTask(id) {
    const compayTask = this.prisma.task.findMany({
      where: {
        CompId: id,
      },
    });
    return compayTask;
  }
}
