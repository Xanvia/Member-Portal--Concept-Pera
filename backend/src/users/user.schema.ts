import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Project, ProjectSchema } from 'src/project/project.schema';
import { IsEmail, IsEnum, IsBoolean, ArrayMinSize } from 'class-validator';

enum UserRole {}
@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: UserRole })
  status: string;

  @Prop()
  isApproved: boolean;

  @Prop({ type: [{ type: ProjectSchema }] })
  projects: Project[];
}

export const UserSchema = SchemaFactory.createForClass(User);
