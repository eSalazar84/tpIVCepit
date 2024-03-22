import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';

@Injectable()
export class ProfesorService {
  constructor(@InjectRepository(Profesor)
  private readonly profesorRepository: Repository<CreateProfesorDto>) { }

  async createProfesor(createProfesorDto: CreateProfesorDto): Promise<CreateProfesorDto> {
    const newProfesor = this.profesorRepository.create(createProfesorDto)
    return this.profesorRepository.save(newProfesor)
  }

  async findAllProfesor(): Promise<CreateProfesorDto[]> {
    return await this.profesorRepository.find();
  }

  async findOneProfesor(id: number): Promise<CreateProfesorDto> {
    const query: FindOneOptions = { where: { idProfesor: id } }
    const profesorFound = await this.profesorRepository.findOne(query)
    if (!profesorFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Profesor not found'
    }, HttpStatus.NOT_FOUND)
    return profesorFound
  }

  async updateProfesor(id: number, updateProfesorDto: UpdateProfesorDto): Promise<CreateProfesorDto> {
    const query: FindOneOptions = { where: { idProfesor: id } }
    const profesorFound = await this.profesorRepository.findOne(query)
    if (!profesorFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Profesor not found'
    }, HttpStatus.NOT_FOUND)
    const updateCiudad = Object.assign(profesorFound, updateProfesorDto)
    return updateCiudad
  }

  async removeProfesor(id: number): Promise<CreateProfesorDto> {
    const query: FindOneOptions = { where: { idProfesor: id } }
    const profesorFound = await this.profesorRepository.findOne(query)
    if (!profesorFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Profesor not found'
    }, HttpStatus.NOT_FOUND)
    const removeProfesor = this.profesorRepository.remove(profesorFound)
    return removeProfesor
  }
}
