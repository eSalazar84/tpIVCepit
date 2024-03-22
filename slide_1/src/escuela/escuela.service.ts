import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EscuelaService {
  constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<CreateEscuelaDto>) { }

  async createEscuela(escuela: CreateEscuelaDto): Promise<CreateEscuelaDto> {
    const newEscuela = this.escuelaRepository.create(escuela)
    return this.escuelaRepository.save(newEscuela)
  }

  async findAllEscuela(): Promise<CreateEscuelaDto[]> {
    return await this.escuelaRepository.find();
  }

  async findOneEscuela(id: number): Promise<CreateEscuelaDto> {
    const query: FindOneOptions = { where: { idEscuela: id } }
    const escuelaFound = await this.escuelaRepository.findOne(query)
    if (!escuelaFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'School not found'
    },
      HttpStatus.NOT_FOUND)
    return escuelaFound;
  }

  async updateEscuela(id: number, updateEscuelaDto: UpdateEscuelaDto): Promise<CreateEscuelaDto> {
    const query: FindOneOptions = { where: { idEscuela: id } }
    const escuelaFound = await this.escuelaRepository.findOne(query)
    if (!escuelaFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'School not found'
    },
      HttpStatus.NOT_FOUND)
    const updateEscuela = Object.assign(escuelaFound, updateEscuelaDto)
    return updateEscuela
  }

  async removeEscuela(id: number): Promise<CreateEscuelaDto> {
    const query: FindOneOptions = { where: { idEscuela: id } }
    const escuelaFound = await this.escuelaRepository.findOne(query)
    if (!escuelaFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'School not found'
    },
      HttpStatus.NOT_FOUND)
    const removeEscuela = this.escuelaRepository.remove(escuelaFound)
    return removeEscuela;
  }
}
