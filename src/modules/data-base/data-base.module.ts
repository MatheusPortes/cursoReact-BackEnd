import { Module } from '@nestjs/common';
import { DataBaseProviders } from './data-base.providers';

@Module({
  imports: [
    
  ],
  providers: [...DataBaseProviders]
})
export class DataBaseModule {}
