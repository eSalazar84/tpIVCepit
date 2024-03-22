import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';

@Controller('clase')
export class ClaseController {
  constructor(private readonly claseService: ClaseService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createClase(@Body() createClaseDto: CreateClaseDto): Promise<CreateClaseDto> {
    return this.claseService.createClase(createClaseDto);
  }

  @Get()
  async findAllClase(): Promise<CreateClaseDto[]> {
    return this.claseService.findAllClase();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOneClase(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateClaseDto> {
    return this.claseService.findOneClase(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateClase(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateClaseDto: UpdateClaseDto): Promise<CreateClaseDto> {
    return this.claseService.updateClase(id, updateClaseDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async removeClase(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateClaseDto> {
    return this.claseService.removeClase(id);
  }
}
