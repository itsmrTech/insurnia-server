import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as amazonScraper from 'amazon-buddy';

import { Dictionary, DictionaryDocument } from './dictionary.schema';
import { sleep } from 'src/common/utils';
import * as _ from 'lodash';

@Injectable()
export class DictionaryService {
  private readonly logger = new Logger(DictionaryService.name);

  constructor(
    @InjectModel(Dictionary.name)
    private dictionaryModel: Model<DictionaryDocument>,
  ) {}

  async getCategoriesByAsins(asins: string[]) {
    const cats: string[] = [];
    for (let i = 0; i < asins.length; i++) {
      const result = await amazonScraper.asin({
        asin: asins[i],
        country: 'DE',
      });
      if (result.result[0]?.categories?.length > 0)
        cats.push(
          result.result[0].categories[result.result[0].categories.length - 1]
            .category,
        );
      await sleep(3000);
    }
    return _.uniq(cats);
  }

  async translateText(inputObj: {
    fromService: string;
    toService: string;
    text: string;
  }) {
    const result = await this.dictionaryModel.findOne({
      'fromService.name': inputObj.fromService,
      'fromService.text': inputObj.text,
      'toService.name': inputObj.toService,
    });
    return result?.toService.text;
  }
  async translateMultiTexts(inputObj: {
    fromService: string;
    toService: string;
    texts: string[];
  }) {
    const result = await this.dictionaryModel.find({
      'fromService.name': inputObj.fromService,
      'fromService.text': { $in: inputObj.texts },
      'toService.name': inputObj.toService,
    });
    return result?.map((item) => ({
      from: item.fromService.text,
      to: item.toService.text,
    }));
  }
}
