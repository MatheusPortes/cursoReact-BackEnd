import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePersonDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  cpf: string

  @IsOptional()
  rg: string

  @IsOptional()
  birth_date: Date
}