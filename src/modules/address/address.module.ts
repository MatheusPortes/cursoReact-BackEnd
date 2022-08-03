import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressProviders } from './address.providers';
import { AddressService } from './address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService, ...AddressProviders]
})
export class AddressModule {}
