import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Measurement, MeasurementDocument } from "./measurement.schema";
import { Model } from "mongoose";

@Injectable()
export class MeasurementRepository {
    constructor(
        @InjectModel(Measurement.name) private measurementModel: Model<MeasurementDocument>
    ) {}

    async findOne(data: Partial<Measurement>): Promise<MeasurementDocument | null> {
        return this.measurementModel.findOne(data).exec();
    }

    async save(data: Partial<Measurement>): Promise<MeasurementDocument> {
        const measurement = new this.measurementModel(data);
        return measurement.save();
    }
    async findAll(): Promise<Measurement[]> {
        return this.measurementModel.find().exec();
    }
   
}