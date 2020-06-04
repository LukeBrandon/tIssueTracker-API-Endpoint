import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BoardModule } from './modules/board/board.module';
import { IssueModule } from './modules/issue/issue.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoConnectionUri = 'mongodb+srv://admin:A4WH5AWMB3MWun7O@cluster0-g47zy.mongodb.net/test?retryWrites=true&w=majority';

@Module({
  imports: [
    UserModule, 
    BoardModule, 
    IssueModule, 
    MongooseModule.forRoot(mongoConnectionUri)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
