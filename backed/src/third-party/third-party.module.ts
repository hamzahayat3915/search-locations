import { Module } from '@nestjs/common';
import { ThirdPartyController } from './google/third-party.controller';
import { ThirdPartyService } from './google/third-party.service';

@Module({
  controllers: [ThirdPartyController],
  providers: [ThirdPartyService]
})
export class ThirdPartyModule {}
