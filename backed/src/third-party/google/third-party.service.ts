import { Client } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { MeasurementsService } from 'src/measurements/measurements.service';
import { MeasurementRepository } from 'src/measurements/meaurements.repository';
@Injectable()
export class ThirdPartyService {
    private client: Client;
    constructor() {
        this.client = new Client({});
    }
    async fetchPlaceId(address: string) {
        const response = await this.client.placeAutocomplete({
            params: {
                input: address,
                key: process.env.API_KEY,
            },
        });
        return response.data.predictions.length > 0 ? response.data.predictions[0].place_id : null;
    }

    async fetchPlaceDetails(placeId: string) {
        const response = await this.client.placeDetails({
            params: {
                place_id: placeId,
                key: process.env.API_KEY,
            },
        });
        return response.data.result;
    }
}
