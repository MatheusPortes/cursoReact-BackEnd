import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserWithPersonDTO {
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