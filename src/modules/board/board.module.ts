import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema, Board } from './board.schema';
import { BoardService } from './board.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }])],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [BoardService],
})
export class BoardModule {}
