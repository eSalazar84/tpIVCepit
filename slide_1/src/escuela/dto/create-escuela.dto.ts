import { Expose } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"


export class CreateEscuelaDto {
    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly nombre: string

    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly domicilio: string

}
