import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadDto } from './create-ciudad.dto';
import { Expose } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateCiudadDto extends PartialType(CreateCiudadDto) {
    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly nombre?: string
}
