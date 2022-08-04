import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePersonDTO {
  @IsNotEmpty()
  @IsString()
  name: number

  @IsNotEmpty()
  @IsString()
  cpf: string

  @IsOptional()
  rg: string

  @IsOptional()
  birth_date: Date
}