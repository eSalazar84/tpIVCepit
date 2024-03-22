import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';

@Controller('escuela')
export class EscuelaController {
  constructor(private readonly escuelaService: EscuelaService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEscuela(@Body() createEscuelaDto: CreateEscuelaDto): Promise<CreateEscuelaDto> {
    return this.escuelaService.createEscuela(createEscuelaDto);
  }

  @Get()
  async findAllEscuela(): Promise<CreateEscuelaDto[]> {
    return this.escuelaService.findAllEscuela();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findOneEscuela(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateEscuelaDto> {
    return this.escuelaService.findOneEscuela(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateEscuela(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateEscuelaDto: UpdateEscuelaDto): Promise<CreateEscuelaDto> {
    return this.escuelaService.updateEscuela(id, updateEscuelaDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async removeEscuela(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<CreateEscuelaDto> {
    return this.escuelaService.removeEscuela(id);
  }
}
