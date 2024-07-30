import { Body, Controller, Post } from '@nestjs/common';
import { ThirdPartyService } from './third-party.service';

@Controller('third-party/google')
export class ThirdPartyController {
    constructor(private readonly thirdpartyService: ThirdPartyService) {}
    @Post()
    async getGeocode(@Body('address') address: string) {
      return await this.thirdpartyService.fetchPlaceId
      (address);
    }
}
