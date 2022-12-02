import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { FindPackagesByProductDto } from './packages.dto';
import * as amazonScraper from 'amazon-buddy';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Package, PackageDocument } from './packages.schema';
import { getCountryByUrl } from 'src/common/domains';
import * as _ from 'lodash';
@Injectable()
export class PackagesService {
  private exchangeRates: any;
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Package.name) private packageModel: Model<PackageDocument>,
    private readonly dictionaryService: DictionaryService,
  ) {
    this.exchangeRates = {};
  }
 
  findAppleProductsCategory(title: string) {
    if (
      title.match(/iMac/i) ||
      title.match(/Mac Mini/i) ||
      title.match(/Mac Pro/i)
    )
      return ['Desktop PCs'];
    if (title.match(/macbook/i)) return ['Laptop'];
    if (title.match(/iPhone/i)) return ['Smartphone'];
    if (title.match(/iPad/i)) return ['Tablet'];
    return [];
  }
  async findPackagesByProducts(inputData: FindPackagesByProductDto) {
    const packages = await Promise.all(
      inputData.cartItems.map(async (cartItem) => {
        const productData = await amazonScraper.asin({
          asin: cartItem.asin,
          country: getCountryByUrl(cartItem.url)?.iso,
        });
        const categories = productData.result[0].categories.map(
          (item: { category: any }) => item.category,
        );
        let translates;
        if (categories[0] !== 'Apple') {
          const translatedCategories =
            await this.dictionaryService.translateMultiTexts({
              fromService: 'Amazon',
              toService: 'Alteos',
              texts: categories,
            });
          translates = translatedCategories.map((category) => category.to);
        } else {
          if (categories[0] === 'Apple')
            translates = this.findAppleProductsCategory(cartItem.title);
        }

        let price = cartItem.price.amount;
        const currency = String(cartItem.price.currency).toUpperCase();
        if (currency !== 'EUR')
          price = await this.exchangeCurrency({
            from: currency,
            to: 'EUR',
            amount: price,
          });
        const packageObj = await this.packageModel
          .findOne({
            $or: [
              {
                category: { $in: translates },
              },
              {
                subcategory: { $in: translates },
              },
            ],

            provider: 'Alteos',
            'priceRange.range.0': { $lte: price },
            'priceRange.range.1': { $gte: price },
            'priceRange.currency': 'eur',
          })
          .sort('cost')
          .lean();
        if (!packageObj) return undefined;
        if (packageObj.cost === undefined) {
          const { data } = await this.httpService.axiosRef.post(
            'https://api.alteos.com/v1/policies/quote',
            {
              productName: 'garantie',
              values: {
                duration: String(packageObj.months),
              },
              objects: [
                {
                  name: 'whiteAppliances',
                  values: {
                    itemValue: `${packageObj.priceRange.range[0]}-${packageObj.priceRange.range[1]}`,
                    itemCategory: packageObj.subcategory,
                    itemType: packageObj.category,
                  },
                  risks: [
                    {
                      name: 'deviceBreakdown',
                      values: {},
                    },
                  ],
                },
              ],
            },
            {
              headers: {
                'x-app-key': 'cb8ab7e9-60c4-4953-b846-ad4c2c3a27fa',
                origin: 'https://shop.alteos.com',
                referer: 'https://shop.alteos.com/garantie/quote',
                'user-agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                'content-type': 'application/json',
              },
            },
          );

          await this.packageModel.updateOne(
            { _id: packageObj._id },
            {
              cost: { amount: data.gross, currency: 'eur' },
              costUpdatedAt: Date.now(),
            },
          );
          packageObj.cost = { amount: data.gross, currency: 'eur' };
        }
        return { asin: cartItem.asin, ...packageObj };
      }),
    );

    return packages.filter((p) => !!p);
  }

  async exchangeCurrency(inputData: {
    from: string;
    to: string;
    amount: number;
  }) {
    let rate: number | undefined = this.exchangeRates[inputData.from];
    if (rate) {
      return inputData.amount * rate;
    }
    const { data } = await this.httpService.axiosRef.get(
      `https://api.exchangerate.host/convert?from=${inputData.from.toUpperCase()}&to=${inputData.to.toUpperCase()}`,
    );
    rate = Number(data.result);
    this.exchangeRates[inputData.from] = rate;
    return inputData.amount * rate;
  }


}
