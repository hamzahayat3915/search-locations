// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeasurementsModule } from './measurements/measurements.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true}),
    MongooseModule.forRoot('mongodb://localhost:27017/hamza'), // Replace with your MongoDB connection string
    MeasurementsModule, ThirdPartyModule,
  ],
})
export class AppModule {}
