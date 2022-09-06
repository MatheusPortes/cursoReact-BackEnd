import { Products } from 'src/entities/Products.entity';
import { DataSource } from 'typeorm';

export const ProductsProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(Products),
    inject: ['DATA_SOURCE']
  },
]