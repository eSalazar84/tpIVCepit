import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateClaseDto {
    @IsString()
    @Expose()
    @IsNotEmpty()
    readonly nombre: string

}
