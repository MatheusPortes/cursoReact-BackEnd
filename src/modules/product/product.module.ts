import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductsProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...ProductsProviders]
})
export class ProductModule {}
