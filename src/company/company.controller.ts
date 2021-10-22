import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from 'src/tasks/tasks.service';
import { CompanyService } from './company.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { user } from './user.decorator';

@Controller('company')
@UseGuards(AuthGuard('cmp'))
export class CompanyController {
  constructor(
    private companyService: CompanyService,
    private taskService: TasksService,
  ) {}

  // create new user
  @Post('/user')
  createUser(@user() company, @Body() createUserDto: CreateUserDto) {
    return this.companyService.createUser(company, createUserDto);
  }

  @Delete('/del/:id')
  delete(@user() company, @Param('id', ParseIntPipe) userId: number) {
    return this.companyService.deleteUser(company, userId);
  }

  @Get('/users')
  getAllUsers(@user() company) {
    return this.companyService.getUsers(company);
  }

  @Post('/add/TaskTo/:id')
  addTask(
    @user() company,
    @Body() createTaskDto: CreateTaskDto,
    @Param('id', ParseIntPipe) userId: number,
  ) {
    return this.taskService.createTask(company, createTaskDto, userId);
  }
}
