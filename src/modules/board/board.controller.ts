import { Controller, Param, Get, Post, Req, Put } from '@nestjs/common';
import { Request } from 'express';
import { BoardService } from './board.service';
import { CreateBoardRequest } from './dto/create-board.dto';
import { Board } from './board.schema';
import { UpdateBoardTitleRequest } from './dto/update-board-title.dto';

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

        await this.boardService.update(updateBoardRequest._id, updateBoardRequest.newTitle);
    }

    @Post('new')
    async createBoard(@Req() request: Request) {
        const createBoardRequest: CreateBoardRequest = request.body;

        console.log(createBoardRequest);

        await this.boardService.create(createBoardRequest);
    }
}
