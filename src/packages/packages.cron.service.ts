import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Package, PackageDocument } from './packages.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PackageFetchTasksService {
  private readonly logger = new Logger(PackageFetchTasksService.name);
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Package.name) private packageModel: Model<PackageDocument>,
    private configService: ConfigService,
  ) {
    // this.fetchPackageCron();
  }

  @Cron('45 * * * * *')
  async fetchPackageCron() {
    const dateStarted = Date.now();
    this.logger.debug('Called when the current second is 45');
    const { data } = await this.httpService.axiosRef.get(
      'https://api.alteos.com/v1/referral-partners/ui/configuration/shop',
      {
        headers: {
          'x-app-key': 'cb8ab7e9-60c4-4953-b846-ad4c2c3a27fa',
        },
      },
    );
    console.log(data);
    const dateRequested = Date.now();

    const garantie = data.configuration.productConfigs.find(
      (obj: { key: string }) => obj.key === 'garantie',
    );
    const rawPackages: {
      category: any;
      subcategory: any;
      provider: string;
      url: string;
      priceRange: { range: number[]; currency: string };
      months: any;
    }[] = [];
    const filterObject: any[] = [];

    garantie.forms[0].fields[1].dependentOptions.map(
      (option: { values: any[]; key: any }) =>
        option.values.map((value: { key: any }) => {
          garantie.forms[0].fields[2].options.map((price: { key: any }) => {
            const range = String(price.key)
              .split('-')
              .map((p) => Number(p));
            const months =
              garantie.forms[0].fields[3].options[
                Math.floor(garantie.forms[0].fields[3].options.length / 2)
              ].key;
            const packageId = `Alteos/${option.key}/${value.key}/${price.key}eur/${months}`;
            const packageObj = {
              packageId,
              category: option.key,
              subcategory: value.key,
              provider: 'Alteos',
              url: `https://shop.alteos.com/garantie/quote?category=${option.key}&subcategory=${value.key}&priceRange=${price.key}`,
              priceRange: {
                range,
                currency: 'eur',
              },
              months,
            };

            filterObject.push(packageId);
            rawPackages.push(packageObj);
          });
        }),
    );
    const dateFinished = Date.now();

    console.log('request time', dateRequested - dateStarted);
    console.log('process time', dateFinished - dateRequested);
    console.log(rawPackages.length);
    const deletedResult = await this.packageModel.deleteMany({
      packageId: { $nin: filterObject },
      provider: 'Alteos',
    });
    console.log('delete result', deletedResult);
    const result = await this.packageModel.bulkWrite(
      rawPackages.map((packageObj, i) => {
        return {
          updateOne: {
            filter: {
              packageId: filterObject[i],
            },
            update: { $set: packageObj },
            upsert: true,
          },
        };
      }),
    );
    const dateUpserted = Date.now();
    console.log('upsert time', dateUpserted - dateFinished);
    console.log('total time', dateFinished - dateStarted);

    console.log('upsert result', result);
  }
}
