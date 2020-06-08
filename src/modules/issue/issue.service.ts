import { Injectable } from '@nestjs/common';
import { Issue } from './issue.schema';
import { CreateIssueRequest } from './dto/issue-requests.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IssueService {
    constructor(@InjectModel(Issue.name) private issueModel: Model<Issue>) {}


    // Create a new issue
    async create(createIssueRequest: CreateIssueRequest): Promise<Issue>{
        const createdIssue: Issue = new this.issueModel(createIssueRequest);

        console.log(createdIssue);
        return createdIssue.save((err, doc) => {
            if(err){
                console.error(err);
                return;
            }
            console.log(doc);
            console.log('Issue created successfully');
        });
    }

    async getById(id: String): Promise<Issue>{
        return this.issueModel.findById(id);
    }

    async getByBoardId(id: string): Promise<Issue[]>{
        return this.issueModel.find({boardId: id});

    }

    async deleteById(id: string){
        return this.issueModel.deleteOne({_id: id});
    }

    async updateStatus(id: string, newStatus: string){
        return this.issueModel.findOneAndUpdate({_id: id}, {$set:{status: newStatus}}, function(err, doc) {
            if(err){
                throw Error(err)
            }

            console.log(doc);
       });
    }
}
