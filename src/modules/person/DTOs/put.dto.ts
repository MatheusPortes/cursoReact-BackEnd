import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class PutPersonDTO {
  @IsOptional()
  @IsNotEmpty({ message: 'Não foi informado um Nome.' })
  name: string

  @IsOptional()
  @IsNotEmpty({ message: 'Não foi informado um RG.' })
  rg: string

  @IsOptional()
  @IsNotEmpty({ message: 'Não foi informado um data de nascimento.' })
  birth_date: Date
}