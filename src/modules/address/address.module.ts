import { Module } from '@nestjs/common';
import { DataBaseModule } from '../data-base/data-base.module';
import { AddressController } from './address.controller';
import { AddressProviders } from './address.providers';
import { AddressService } from './address.service';

@Module({
  imports: [DataBaseModule],
  controllers: [AddressController],
  providers: [AddressService, ...AddressProviders]
})
export class AddressModule {}
