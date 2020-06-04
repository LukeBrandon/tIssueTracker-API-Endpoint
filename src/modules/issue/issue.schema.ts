import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

@Schema()
export class Issue extends Document {
  @Prop()
  title: String;

  @Prop()
  desc: String;

  @Prop()
  status: String;

  @Prop()
  userId: String;

  @Prop()
  boardId: String;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);