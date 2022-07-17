import { Module } from '@nestjs/common';
import { DataBaseProviders } from './data-base.providers';

@Module({
  providers: [...DataBaseProviders],
  exports: [...DataBaseProviders],
})
export class DataBaseModule {}
