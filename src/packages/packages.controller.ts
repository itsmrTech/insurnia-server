import { Controller, Get, Query } from '@nestjs/common';
import { FindPackagesByProductDto } from './packages.dto';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}
  @Get()
  findPackagesByProducts(@Query() query: FindPackagesByProductDto) {
    const packages = this.packagesService.findPackagesByProducts(query);
    return {
      packages,
    };
  }
}
