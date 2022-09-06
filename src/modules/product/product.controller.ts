import { Controller, Get, Query } from '@nestjs/common'
import { Products } from 'src/entities/Products.entity'
import { SearchProductsDTO } from './DTOs/search-products.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    async searchProducts(@Query() params: SearchProductsDTO) {
        return this.productService.searchProducts(params)
    }
}
