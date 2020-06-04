import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './board.schema';
import { CreateBoardRequest } from './dto/create-board.dto';

@Injectable()
export class BoardService {
    constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

    async create(createBoardRequest: CreateBoardRequest): Promise<Board>{
        // Generates object according to the schema to go into MongoDB
        // Automatically generates an ID for the id property
        const createdBoard: Board = new this.boardModel(createBoardRequest);

        console.log(createdBoard);
        return createdBoard.save((err, doc) => {
            if(err){
                console.error(err);
                return;
            }
            console.log(doc);
            console.log('Board inserted successfully');
        });
    }

    async update(){

    }

    async delete(){

    }

    async getById(id: string): Promise<Board>{
        return this.boardModel.findOne({_id: id});
    }

    async getBoardsForUser(userId: string): Promise<Board[]>{
        return this.boardModel.find({userId: userId});
    }
}
