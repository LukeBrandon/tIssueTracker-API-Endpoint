import { Controller, Param, Get } from '@nestjs/common';

@Controller('board')
export class BoardController {

    @Get(':id')
    getBoardById(@Param('id') id): string {
        return `Getting board with id ${id}`;
    }
    
}
