import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';
import { user } from 'src/company/user.decorator';
import { TasksService } from 'src/tasks/tasks.service';
import { UpdateTaskDto } from './dto/update-Task.dto';

@Controller('users')
@UseGuards(AuthGuard('usr'))
export class UsersController {
  constructor(private readonly taskService: TasksService) {}

  @Post('update/:id')
  updateTask(@Param('id', ParseIntPipe) taskId, @Body() body: UpdateTaskDto) {
    return this.taskService.updateTask(taskId, body);
  }

  @Get('task')
  GetAllTask(@user() user) {
    return this.taskService.getUserTask(user.id);
  }
}
