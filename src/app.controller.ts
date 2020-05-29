import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }

  @Post()
  addBoard(@Req() request: Request): string {

    //return this.boardService.createBoard();
    return 'Creating your new board';
  }
}
