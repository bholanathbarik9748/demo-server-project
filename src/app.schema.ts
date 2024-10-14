import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AuthDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  email: string;
  password: string;
}

export const AuthDocument = SchemaFactory.createForClass(User);
