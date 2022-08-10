import { Type } from "class-transformer"
import { IsInt, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateAddressDTO } from "src/modules/address/DTOs/create-address.dto"
import { CreatePersonDTO } from "src/modules/person/DTOs/creste.dto"

class UserDTO {
    @IsNotEmpty({ message: 'Não foi informado um Login.' })
    @IsString({ message: 'Valor invalido para Login!' })
    login: string

    @IsNotEmpty({ message: 'Não foi informado um Senha.' })
    @IsString({ message: 'Valor invalido para Password!' })
    password: string

    @IsNotEmpty({ message: 'E-mail é obrigatório.' })
    @IsString({ message: 'Valor invalido para E-mail!' })
    email: string
}

export class CreateUserDTO {
    @IsOptional()
    @ValidateNested()
    @Type(() => UserDTO)
    user: UserDTO

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreatePersonDTO)
    person: CreatePersonDTO

    @IsOptional()
    @IsObject({ message: 'Valor invalido!' })
    @ValidateNested()
    @Type(() => CreateAddressDTO)
    address: CreateAddressDTO
}