import { Controller, Get, Post, Req, Param, Delete } from '@nestjs/common';
import { IssueService } from './issue.service';
import { Issue } from './issue.schema';
import { CreateIssueRequest } from './dto/create-issue.dto';
import { Request } from 'express';

@Controller('issue')
export class IssueController {
    constructor(private readonly issueService: IssueService) {}

    @Get('one/:id')
    async getIssueById(@Param('id') id): Promise<Issue> {
        return await this.issueService.getById(id);
    }

    @Get('all/:boardId')
    async getIssuesByBoardId(@Param('boardId') id): Promise<Issue[]> {
        console.log("getting issues by board id " + id);
        return await this.issueService.getByBoardId(id);
    }
    @Delete('delete/:id')
    async deleteIssueById(@Param('id') id) {
        console.log("Deleting issue " + id);
        return await this.issueService.deleteById(id);
    }

    @Post('new')
    async createIssue(@Req() request: Request) {
        const createIssueRequest: CreateIssueRequest = request.body;

        console.log(createIssueRequest);

        await this.issueService.create(createIssueRequest);
    }
}
