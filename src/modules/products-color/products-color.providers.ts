import { ProductsColor } from 'src/entities/ProductsColor.entity';
import { DataSource } from 'typeorm';

export const ProductsColorProviders = [
  {
    provide: 'PRODUCTS_COLOR_REPOSITORY',
    useFactory: async (dataSource: DataSource) => dataSource.getRepository(ProductsColor),
    inject: ['DATA_SOURCE']
  },
]