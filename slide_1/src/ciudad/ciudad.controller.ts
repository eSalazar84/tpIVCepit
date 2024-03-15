import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe, HttpStatus } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCiudad(@Body() createCiudadDto: CreateCiudadDto): Promise<CreateCiudadDto> {
    return this.ciudadService.createCiudad(createCiudadDto);
  }

  @Get()
  async findAllCiudad(): Promise<CreateCiudadDto[]> {
    return this.ciudadService.findAllCiudad();
  }

  @Get(':id')
  async findOneCiudad(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateCiudadDto> {
    return this.ciudadService.findOneCiudad(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCiudad(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number, @Body() updateCiudadDto: UpdateCiudadDto): Promise<CreateCiudadDto> {
    return this.ciudadService.updateCiudad(id, updateCiudadDto);
  }

  @Delete(':id')
  async removeCiudad(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number):Promise<Boolean> {
    return this.ciudadService.removeCiudad(id);
  }
}
