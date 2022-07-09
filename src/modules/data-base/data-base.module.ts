import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseProviders } from './data-base.providers';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [...DataBaseProviders]
})
export class DataBaseModule {}
