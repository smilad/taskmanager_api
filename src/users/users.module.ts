import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TasksService } from 'src/tasks/tasks.service';
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UsersController],
  providers: [TasksService],
})
export class UsersModule {}
