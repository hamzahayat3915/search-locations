// src/measurements/measurements.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeasurementsService } from './measurements.service';
import { MeasurementsController } from './measurements.controller';
import { Measurement, MeasurementSchema } from './measurement.schema';
import { ThirdPartyService } from '../third-party/google/third-party.service';
import { MeasurementRepository } from './meaurements.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Measurement.name, schema: MeasurementSchema }]),
  ],
  providers: [MeasurementsService, ThirdPartyService, MeasurementRepository],
  controllers: [MeasurementsController],
})
export class MeasurementsModule {}
