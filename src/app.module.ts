import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { AddressModule } from './modules/address/address.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit-of-work.module';
import { UserModule } from './modules/user/user.module';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [
    DataBaseModule,
    UnitOfWorkModule,
    AddressModule,
    UserModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
