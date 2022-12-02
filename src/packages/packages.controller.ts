import { Controller, Get, Query } from '@nestjs/common';
import { FindPackagesByProductDto } from './packages.dto';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}
  @Get()
  async findPackagesByProducts(@Query() query: FindPackagesByProductDto) {
    console.log(query.cartItems);
    const packages = await this.packagesService.findPackagesByProducts({
      cartItems: query.cartItems,
    });
    return {
      packages,
    };
  }
}
