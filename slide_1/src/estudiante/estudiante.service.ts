import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  constructor(@InjectRepository(Estudiante)
  private readonly estudianteRepository: Repository<CreateEstudianteDto>) { }

  async createEstudiante(createEstudianteDto: CreateEstudianteDto): Promise<CreateEstudianteDto> {
    const newEstudiante = this.estudianteRepository.create(createEstudianteDto)
    return this.estudianteRepository.save(newEstudiante)
  }

  async findAllEstudiante(): Promise<CreateEstudianteDto[]> {
    return this.estudianteRepository.find();
  }

  async findOneEstudiante(id: number): Promise<CreateEstudianteDto> {
    const query: FindOneOptions = { where: { idEstudiante: id } }
    const estudianteFound: CreateEstudianteDto = await this.estudianteRepository.findOne(query)
    if (!estudianteFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Estudiante not found'
    }, HttpStatus.NOT_FOUND)
    return estudianteFound
  }

  async updateEstudiante(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<CreateEstudianteDto> {
    const query: FindOneOptions = { where: { idEstudiante: id } }
    const estudianteFound: CreateEstudianteDto = await this.estudianteRepository.findOne(query)
    if (!estudianteFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Estudiante not found'
    }, HttpStatus.NOT_FOUND)
    const updateEstudiante = Object.assign(estudianteFound, updateEstudianteDto)
    return updateEstudiante;
  }

  async removeEstudiante(id: number): Promise<CreateEstudianteDto> {
    const query: FindOneOptions = { where: { idEstudiante: id } }
    const estudianteFound: CreateEstudianteDto = await this.estudianteRepository.findOne(query)
    if (!estudianteFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Estudiante not found'
    }, HttpStatus.NOT_FOUND)
    const removeEstudiante = await this.estudianteRepository.remove(estudianteFound)
    return removeEstudiante
  }
}
