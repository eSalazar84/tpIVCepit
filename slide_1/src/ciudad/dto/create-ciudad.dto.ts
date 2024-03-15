import { Expose } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"


export class CreateCiudadDto {

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly nombre: string
}
