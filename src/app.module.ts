import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { AddressModule } from './modules/address/address.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit-of-work.module';
import { UserModule } from './modules/user/user.module';
import { PersonModule } from './modules/person/person.module';
import { ProductModule } from './modules/product/product.module';
import { ProductsColorModule } from './modules/products-color/products-color.module';

@Module({
  imports: [
    DataBaseModule,
    UnitOfWorkModule,
    AddressModule,
    UserModule,
    PersonModule,
    ProductModule,
    ProductsColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
