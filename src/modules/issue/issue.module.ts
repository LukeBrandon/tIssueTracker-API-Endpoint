import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IssueService } from './issue.service';
import { Issue, IssueSchema } from './issue.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Issue.name, schema: IssueSchema }])],
  controllers: [IssueController],
  providers: [IssueService],
  exports: [IssueService]
})
export class IssueModule {}
