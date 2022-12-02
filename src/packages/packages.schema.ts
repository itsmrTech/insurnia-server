import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PackageDocument = HydratedDocument<Package>;

@Schema()
class Price {
  @Prop([Number, Number])
  range: [number, number];

  @Prop()
  currency: string;
}

@Schema()
class Cost {
  @Prop()
  amount: number;

  @Prop()
  currency: string;
}

@Schema({
  timestamps: true,
})
export class Package {
  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  months: number;

  @Prop()
  priceRange: Price;

  @Prop()
  provider: string;

  @Prop()
  url: string;

  @Prop()
  packageId: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;

  @Prop()
  costUpdatedAt: Date;

  @Prop()
  cost: Cost;
}

export const PackageSchema = SchemaFactory.createForClass(Package);
