// src/measurements/measurements.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Measurement, MeasurementDocument } from './measurement.schema';
import { ThirdPartyService } from '../third-party/google/third-party.service';
import { MeasurementRepository } from './meaurements.repository';
@Injectable()
export class MeasurementsService {
  constructor(
    @InjectModel(Measurement.name) private measurementModel: Model<MeasurementDocument>,
    private readonly thirdpartyService: ThirdPartyService,
    private readonly meaurementRepository: MeasurementRepository
  ) { }
  async findByAddress(address: string): Promise<Measurement | null> {
    return this.measurementModel.findOne({ address }).exec();
  }
  formatResponse(data: any) {
    return {
      lat: data.mapCenter.lat,
      lng: data.mapCenter.lng,
      placeId: data.placeId,
      address: data.formatted_address || data.address,
    };
  }
  async searchAddress(address) {
    try {
      const existingMeasurement = await this.meaurementRepository.findOne({address});
  
      if (existingMeasurement) {
        
        return this.formatResponse(existingMeasurement)
      } else {
        const placeId = await this.thirdpartyService.fetchPlaceId(address)
        const res = await this.thirdpartyService.fetchPlaceDetails(placeId)
        const response = {
          lat:res.geometry.location.lat,
          lng:res.geometry.location.lng,
          placeId,
          address
      };
        
        return response
      }
    } catch (err) {
      throw err
    }
  }

  async create(measurementData: Partial<Measurement>): Promise<Measurement> {
    try {
      const existingMeasurement = await this.meaurementRepository.findOne({placeId:measurementData.placeId});

      if (existingMeasurement) {
        throw new ConflictException('Measurement already exists');
      }
      return await this.meaurementRepository.save(measurementData);
    } catch (error) {
      console.error('Error creating measurement:', error);
      throw error;
    }
  }
  async findAll(): Promise<Measurement[]> {
    return this.meaurementRepository.findAll()
  }
}
