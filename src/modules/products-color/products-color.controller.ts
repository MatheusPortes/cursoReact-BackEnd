import { Controller, Get, Param } from '@nestjs/common'
import { ProductsColor } from 'src/entities/ProductsColor.entity'
import { ProductsColorService } from './products-color.service'

@Controller('products-color')
export class ProductsColorController {
    constructor(private productsColorService: ProductsColorService) {}

    @Get(':id')
    async searchProductsColorByID(@Param('id') id: number):Promise<ProductsColor[]> {
        return await this.productsColorService.searchProductsColorByID(id)
    }
}
