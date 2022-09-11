import { HttpStatus, Inject, Injectable } from '@nestjs/common'
import { ForbiddenException } from 'src/common/forbidden.exception'
import { ProductsColor } from 'src/entities/ProductsColor.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProductsColorService {
    constructor(
        @Inject('PRODUCTS_COLOR_REPOSITORY')
        private productsColorRepository: Repository<ProductsColor>
    ) {}

    async searchProductsColorByID(id: number) {
        const data = await this.productsColorRepository.find({
            where: { id_products: id },
            select: {
                id: true,
                color: {
                    id: true,
                    color: true,
                    hex: true,
                },
            },
            relations: {
                color: true,
            },
        })
        return data
    }
}
