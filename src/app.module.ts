import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { AddressModule } from './modules/address/address.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit-of-work.module';

@Module({
  imports: [
    DataBaseModule,
    AddressModule,
    UnitOfWorkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
