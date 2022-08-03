import { Global, Module } from '@nestjs/common';
import { DataBaseProviders } from './data-base.providers';

@Global()
@Module({
  providers: [...DataBaseProviders],
  exports: [...DataBaseProviders],
})
export class DataBaseModule {}
