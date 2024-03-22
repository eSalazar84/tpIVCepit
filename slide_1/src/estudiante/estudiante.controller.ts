import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEstudiante(@Body() createEstudianteDto: CreateEstudianteDto): Promise<CreateEstudianteDto> {
    return this.estudianteService.createEstudiante(createEstudianteDto);
  }

  @Get()
  async findAllEstudiante(): Promise<CreateEstudianteDto[]> {
    return this.estudianteService.findAllEstudiante();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOneEstudiante(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateEstudianteDto> {
    return this.estudianteService.findOneEstudiante(+id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateEstudiante(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateEstudianteDto: UpdateEstudianteDto): Promise<CreateEstudianteDto> {
    return this.estudianteService.updateEstudiante(+id, updateEstudianteDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async removeEstudiante(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateEstudianteDto> {
    return this.estudianteService.removeEstudiante(+id);
  }
}
