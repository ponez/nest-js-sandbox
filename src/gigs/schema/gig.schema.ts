import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GigDocument = Gig & Document;

@Schema()
export class Gig {
  @Prop({ required: true })
  gigId: string;

  @Prop({ required: true })
  Description: string;

  @Prop([String])
  Techs: string[];

  @Prop({ required: true })
  budget: number;
}

export const GigSchema = SchemaFactory.createForClass(Gig);
