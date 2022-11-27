import { Injectable } from '@nestjs/common';
import { FindPackagesByProductDto } from './packages.dto';

@Injectable()
export class PackagesService {
  findPackagesByProducts(data: FindPackagesByProductDto) {
    return [
      {
        asnid: 'ANSID',
        package: {
          url: 'https://shop.alteos.com/garantie/quote?category=laptop',
          fee: {
            amount: 89.4,
            currency: 'euro',
          },
        },
      },
    ];
  }
}
