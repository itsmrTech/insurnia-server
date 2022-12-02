import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PackagesController } from './packages.controller';
import { PackageFetchTasksService } from './packages.cron.service';
import { PackagesService } from './packages.service';
import { Package, PackageSchema } from './packages.schema';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  imports: [
    HttpModule,
    DictionaryModule,
    MongooseModule.forFeature([{ name: Package.name, schema: PackageSchema }]),
  ],
  controllers: [PackagesController],
  providers: [PackagesService, PackageFetchTasksService],
})
export class PackagesModule {}
