import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

@Schema()
export class Board extends Document {
  @Prop()
  title: String;

  @Prop()
  userId: String;
}

export const BoardSchema = SchemaFactory.createForClass(Board);