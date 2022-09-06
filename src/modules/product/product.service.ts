import { Inject, Injectable } from '@nestjs/common';
import { Products } from 'src/entities/Products.entity';
import { Repository } from 'typeorm';
import { SearchProductsDTO } from './DTOs/search-products.dto';

@Injectable()
export class ProductService {
    constructor(
        @Inject(`PRODUCT_REPOSITORY`)
        private productRepository: Repository<Products>
    ) {}

    async searchProducts(params: SearchProductsDTO) {
        return this.productRepository
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.volume_type','volume_type')
            .select([
                'product.id',
                'product.name', 
                'product.price', 
                'product.quantity', 
                'product.bulk', 
                'product.update_at',
                'product.created_at',
                'volume_type',
            ])
            .getMany()
    }
}
