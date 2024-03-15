import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
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
  async findAllEscuela() {
    return this.escuelaService.findAllEscuela();
  }

  @Get(':id')
  async findOneEscuela(@Param('id') id: string) {
    return this.escuelaService.findOneEscuela(+id);
  }

  @Patch(':id')
  async updateEscuela(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelaService.updateEscuela(+id, updateEscuelaDto);
  }

  @Delete(':id')
  async removeEscuela(@Param('id') id: string) {
    return this.escuelaService.removeEscuela(+id);
  }
}
