import { PartialType } from '@nestjs/mapped-types';
import { CreateClaseDto } from './create-clase.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateClaseDto extends PartialType(CreateClaseDto) {
    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly nombre?: string
}
