import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserRequest, LoginRequestResponse, CreateUserResponse } from './dto/user-requests.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    getUserById(id: string){
        return this.userModel.findById(id);
    }

    async createUser(createUserRequest: CreateUserRequest): Promise<CreateUserResponse>{
        // Check if email is already being used
        if(await this.userModel.findOne({email: createUserRequest.email.toLowerCase()})){
            return {
                success: false,
                message: "This email already has an account associated with it",
            }
        }

        // Save the user in the DB
        const createdUser: User = new this.userModel(createUserRequest);
        createdUser.save((err, doc) => {
            if(err){
                return console.error(err);
            }
            console.log("User Created successfully!");
        }); 

        return {
            success: true,
            message: "Account created successfully!",
            userId: createdUser._id
        };
    }

    async login(email: string, password: string): Promise<LoginRequestResponse>{
        const user: User = await this.userModel.findOne({email: email});

        if(email === user.email){
            const validLogin: boolean = bcrypt.compareSync(password, user.password);
            return { 
                success: validLogin,
                userId: validLogin ? user.id : null
            };
        } else {
            return {success: false};
        }
    }
}
