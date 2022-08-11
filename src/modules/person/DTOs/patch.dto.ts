import { IsBoolean, IsNotEmpty } from "class-validator";

export class PatchPersonDTO {
    @IsNotEmpty({ message: 'Não foi informado um status.' })
    @IsBoolean({ message: 'Valor invalido para status!' })
    is_status: boolean
}