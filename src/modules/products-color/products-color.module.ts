import { Module } from '@nestjs/common';
import { ProductsColorProviders } from './products-color.providers';
import { ProductsColorController } from './products-color.controller';
import { ProductsColorService } from './products-color.service';

@Module({
  controllers: [ProductsColorController],
  providers: [ProductsColorService, ...ProductsColorProviders]
})
export class ProductsColorModule {}
