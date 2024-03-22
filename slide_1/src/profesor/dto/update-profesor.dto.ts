import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDto } from './create-profesor.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateProfesorDto extends PartialType(CreateProfesorDto) {
    @IsString()
    @IsNotEmpty()
    @Expose()
    readonly nombre?: string

    @IsString()
    @IsNotEmpty()
    @Expose()
    readonly apellido?: string
}
