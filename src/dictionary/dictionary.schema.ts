import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DictionaryDocument = HydratedDocument<Dictionary>;

@Schema()
class Service {
  @Prop()
  name: string;

  @Prop()
  text: string;
}

@Schema({
  timestamps: true,
})
export class Dictionary {
  @Prop()
  fromService: Service;

  @Prop()
  toService: Service;
}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);
