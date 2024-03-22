import { Expose } from "class-transformer"
import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    @Expose()
    nombre: string

    @IsString()
    @IsNotEmpty()
    @Expose()
    apellido: string

    @IsDate()
    @IsNotEmpty()
    @Expose()
    fecha_nacimiento: Date
}
