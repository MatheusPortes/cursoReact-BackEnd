import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class PutUserDTO {
    @IsOptional()
    @IsNotEmpty({ message: 'Não foi informado um login.'})
    @IsString({ message: 'Valor invalido para Login!' })
    login: string

    @IsOptional()
    @IsNotEmpty({ message: 'Não foi informado um password.'})
    @IsString({ message: 'Valor invalido para Password!' })
    password: string

    @IsOptional()
    @IsNotEmpty({ message: 'Não foi informado um E-mail.'})
    @IsString({ message: 'Valor invalido para E-mail!' })
    email: string
}
