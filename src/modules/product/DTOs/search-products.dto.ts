import { IsOptional, IsString } from 'class-validator'

export class SearchProductsDTO {
    @IsOptional()
    @IsString({ message: 'Nome obrigatório!' })
    name: string

    @IsOptional()
    @IsString({ message: 'ID obrigatório!' })
    id: string
}
