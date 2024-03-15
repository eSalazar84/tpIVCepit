import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EscuelaService {

  constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>) { }

  async createEscuela(createEscuela: CreateEscuelaDto): Promise<CreateEscuelaDto> {
    const newEscuela = await this.escuelaRepository.create(createEscuela)
    return this.escuelaRepository.save(newEscuela)
  }

  async findAllEscuela(): Promise<Escuela[]> {
    return await this.escuelaRepository.find();
  }

  async findOneEscuela(id: number): Promise<Escuela> {
    const query: FindOneOptions = { where: { idEscuela: id } }
    const escuelaFound: Escuela = await this.escuelaRepository.findOne(query)
    if (!escuelaFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'School not found'
    },
      HttpStatus.NOT_FOUND)
    return escuelaFound;
  }

  async updateEscuela(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  async removeEscuela(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
