import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [CompanyModule, PrismaModule, UsersModule, AuthModule],
  providers: [TasksService],
})
export class AppModule {}
