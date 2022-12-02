import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dictionary, DictionarySchema } from './dictionary.schema';
import { DictionaryService } from './dictionary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dictionary.name, schema: DictionarySchema },
    ]),
  ],
  providers: [DictionaryService],
  exports: [DictionaryService],
})
export class DictionaryModule {}
