import { Expose } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateProfesorDto {
    @IsString()
    @IsNotEmpty()
    @Expose()
    readonly nombre: string

    @IsString()
    @IsNotEmpty()
    @Expose()
    readonly apellido: string
}
