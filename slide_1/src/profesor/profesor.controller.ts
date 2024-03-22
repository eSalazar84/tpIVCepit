import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createProfesor(@Body() createProfesorDto: CreateProfesorDto): Promise<CreateProfesorDto> {
    return this.profesorService.createProfesor(createProfesorDto);
  }

  @Get()
  async findAllProfesor(): Promise<CreateProfesorDto[]> {
    return this.profesorService.findAllProfesor();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOneProfesor(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateProfesorDto> {
    return this.profesorService.findOneProfesor(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProfesor(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateProfesorDto: UpdateProfesorDto): Promise<CreateProfesorDto> {
    return this.profesorService.updateProfesor(id, updateProfesorDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async removeProfesor(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateProfesorDto> {
    return this.profesorService.removeProfesor(id);
  }
}
