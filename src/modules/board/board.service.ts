import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './board.schema';
import { CreateBoardRequest, SimpleResponse } from './dto/board-requests.dto';

@Injectable()
export class BoardService {
    constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

    async create(createBoardRequest: CreateBoardRequest): Promise<SimpleResponse>{
        const createdBoard: Board = new this.boardModel(createBoardRequest);

        console.log(createdBoard);
        createdBoard.save((err, doc) => {
            if(err){
                console.error(err);
                return;
            }
            console.log(doc);
            console.log('Board inserted successfully');
        });
        
        return {
            success: true,
            message: "Board created successfully"
        }
    }

    async update(id: string, newTitle: string) {
        return this.boardModel.findOneAndUpdate({_id: id}, {$set: {title: newTitle}}, function(err, doc) {
            if(err){
                throw Error(err);
            }

            console.log(doc);
            return "success";
        });
    }

    async delete(id: string): Promise<SimpleResponse> {
        const yes = await this.boardModel.findByIdAndDelete(id);
        if(yes)
            return {
                success: true,
                message: "Board deleted successfully"
            }
        else
            return {
                success: false,
                message: "There was a problme deleting your board"
            }
    }

    async getById(id: string): Promise<Board>{
        return this.boardModel.findOne({_id: id});
    }

    async getBoardsForUser(userId: string): Promise<Board[]>{
        return this.boardModel.find({userId: userId});
    }
}
