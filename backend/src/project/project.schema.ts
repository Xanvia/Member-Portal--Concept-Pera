// project.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User, UserSchema } from 'src/users/user.schema';

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

  @Prop({ type: [{ type: UserSchema }] })
  coordinators: User[];

  @Prop({ type: [{ type: UserSchema }] })
  members: User[];

  @Prop()
  start: Date;

  @Prop()
  deadline: Date;

  @Prop({ type: [{ type: String }] })
  media: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
