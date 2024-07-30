// src/measurements/measurements.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { Measurement } from './measurement.schema';
import { Client, PlaceAutocompleteRequest, PlaceAutocompleteResponse } from '@googlemaps/google-maps-services-js';
import { ThirdPartyService } from '../third-party/google/third-party.service';
@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService,
    private readonly thirdpartyService: ThirdPartyService
  ) { }

  @Post('/geocode')
  async getGeocode(@Body('address') address: string) {
    return await this.measurementsService.searchAddress(address);
  }

  @Post()
  async create(@Body() measurementData: Partial<Measurement>) {
    return this.measurementsService.create(measurementData);
  }

  @Get()
  async findAll() {
    return this.measurementsService.findAll();
  }
}
