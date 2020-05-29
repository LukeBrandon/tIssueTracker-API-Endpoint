import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { IssueModule } from './issue/issue.module';

@Module({
  imports: [UserModule, BoardModule, IssueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
