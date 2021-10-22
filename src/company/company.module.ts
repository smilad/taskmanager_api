import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TasksService } from 'src/tasks/tasks.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CompanyController],
  providers: [CompanyService, TasksService],
})
export class CompanyModule {}
