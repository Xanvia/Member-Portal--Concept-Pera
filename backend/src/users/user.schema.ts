// user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Project } from 'src/project/project.schema';

@Schema()
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  isApproved: boolean;

  @Prop({ type: [{ type: String }] })
  projects: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
