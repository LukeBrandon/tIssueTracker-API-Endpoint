import { Controller, Get, Param, Post, Req, Put } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { LoginRequest, CreateUserRequest, LoginRequestResponse, CreateUserResponse } from './dto/user-requests.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Get('one/:id')
    getUserById(@Param('id') id):string {
        return `Getting user with id ${id}`;
    }

    @Post('new')
    createUser(@Req() request: Request): Promise<CreateUserResponse> {
        const createUserRequest: CreateUserRequest = request.body;

        return this.userService.createUser(createUserRequest);

    }

    @Put('login')
    async login(@Req() request: Request): Promise<LoginRequestResponse>{
        const loginRequest: LoginRequest = request.body;
        
        return this.userService.login(loginRequest.email, loginRequest.password);
    }
}
