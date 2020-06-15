import { Controller, Param, Get, Post, Req, Put } from '@nestjs/common';
import { Request } from 'express';
import { BoardService } from './board.service';
import { CreateBoardRequest, UpdateBoardTitleRequest, CreateBoardResponse } from './dto/board-requests.dto';
import { Board } from './board.schema';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}


    @Get('one/:boardId')
    async getBoardById(@Param('boardId') id): Promise<Board> {
        console.log("getting board by id " + id);
        return await this.boardService.getById(id);
    }

    @Get('all/:userId')
    async getBoardsForUser(@Param('userId') userId): Promise<Board[]> {
        return await this.boardService.getBoardsForUser(userId);
    }

    @Put('update/title')
    async updateBoardTitleById(@Req() request: Request) {
        const updateBoardRequest: UpdateBoardTitleRequest = request.body;

        console.log(`Updating board with id ${updateBoardRequest._id} to new title: ${updateBoardRequest.newTitle}`);

        return await this.boardService.update(updateBoardRequest._id, updateBoardRequest.newTitle);
    }

    @Post('new')
    async createBoard(@Req() request: Request): Promise<CreateBoardResponse> {
        const createBoardRequest: CreateBoardRequest = request.body;

        console.log(createBoardRequest);

        return await this.boardService.create(createBoardRequest);
    }
}
