import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePersonDTO {
  @IsNotEmpty({ message: 'Não foi informado um Nome.' })
  @IsString({ message: 'Valor invalido!' })
  name: string

  @IsNotEmpty({ message: 'Não foi informado um CPF.' })
  @IsString({ message: 'Valor invalido!' })
  cpf: string

  @IsOptional()
  @IsString({ message: 'Valor invalido!' })
  rg: string

  @IsOptional()
  birth_date: Date
}