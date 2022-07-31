import { IsNotEmpty } from "class-validator"

export class CreateAddressDTO {
  @IsNotEmpty({ message: 'Não foi informado o CEP.'})
  cep: number

  @IsNotEmpty({ message: 'Não foi informado o cidate.'})
  city: string

  @IsNotEmpty({ message: 'Não foi informado o Bairro.'})
  district: string

  @IsNotEmpty({ message: 'Não foi informado o E-mail.'})
  email: string

  @IsNotEmpty({ message: 'Não foi informado um nome.'})
  name: string

  @IsNotEmpty({ message: 'Não foi informado o número da residência.'})
  numero: number

  @IsNotEmpty({ message: 'Não foi informado um senha.'})
  password: string

  @IsNotEmpty({ message: 'Não foi informado um rua.'})
  road: string

  @IsNotEmpty({ message: 'Não foi informado um estado.'})
  state: string
}
