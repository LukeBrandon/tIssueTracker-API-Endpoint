import { Controller, Get, Post, Req, Param, Delete, Put } from '@nestjs/common';
import { IssueService } from './issue.service';
import { Issue } from './issue.schema';
import { CreateIssueRequest } from './dto/create-issue.dto';
import { Request } from 'express';
import { UpdateIssueStatusRequest } from './dto/update-issue-status.dt';

@Controller('issue')
export class IssueController {
    constructor(private readonly issueService: IssueService) {}

    @Post('new')
    async createIssue(@Req() request: Request) {
        const createIssueRequest: CreateIssueRequest = request.body;

        console.log(createIssueRequest);

        await this.issueService.create(createIssueRequest);
    }

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

    @Put('update/status')
    async updateIssueById(@Req() req: Request) {
        const updateIssueRequest: UpdateIssueStatusRequest = req.body;
        console.log("Updating issue " + updateIssueRequest._id);

        return await this.issueService.updateStatus(updateIssueRequest._id, updateIssueRequest.newStatus);
    }
}
