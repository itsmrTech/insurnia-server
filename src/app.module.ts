import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PackagesModule } from './packages/packages.module';
import configuration from './config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { DictionaryModule } from './dictionary/dictionary.module';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    MongooseModule.forRoot(configuration().mongoUrl),
    ScheduleModule.forRoot(),
    PackagesModule,
    DictionaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
