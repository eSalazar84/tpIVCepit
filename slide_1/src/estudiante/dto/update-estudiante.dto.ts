import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    @IsString()
    @IsNotEmpty()
    @Expose()
    nombre?: string

    @IsString()
    @IsNotEmpty()
    @Expose()
    apellido?: string

    @IsDate()
    @IsNotEmpty()
    @Expose()
    fecha_nacimiento?: Date
}
