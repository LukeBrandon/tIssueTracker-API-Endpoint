import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get(':id')
    getUserById(@Param('id') id):string {
        return `Getting user with id ${id}`;
    }
}
