import { PartialType } from '@nestjs/mapped-types';
import { CreateEscuelaDto } from './create-escuela.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateEscuelaDto extends PartialType(CreateEscuelaDto) {
    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly nombre: string

    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly domicilio: string
}
