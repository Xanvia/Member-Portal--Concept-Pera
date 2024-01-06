// project.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import * as mongoose from 'mongoose';


enum ProjectStatus {}
// Add your project status values here

@Schema()
export class Project extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: String, enum: ProjectStatus })
  status: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  coordinators: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];

  @Prop()
  start: Date;

  @Prop()
  deadline: Date;

  @Prop({ type: [{ type: String }] })
  media: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
