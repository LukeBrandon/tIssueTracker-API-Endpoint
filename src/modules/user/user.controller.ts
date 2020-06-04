import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {

    @Get(':id')
    getUserById(@Param('id') id):string {
        return `Getting user with id ${id}`;
    }

    @Post('new')
    createUser(@Req() request: Request): string {

        return `Creating user from the supplied information`;
    }
}
