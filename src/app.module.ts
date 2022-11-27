import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PackagesModule } from './packages/packages.module';
import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    MongooseModule.forRoot(configuration().mongoUrl),
    PackagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }