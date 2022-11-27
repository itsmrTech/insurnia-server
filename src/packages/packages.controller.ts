import { Controller, Get, Query } from '@nestjs/common';
import { FindPackagesByProductDto } from './packages.dto';

@Controller('packages')
export class PackagesController {
  @Get()
  findPackagesByProducts(@Query() findPackages: FindPackagesByProductDto) {}
}
