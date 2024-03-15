import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  constructor(@InjectRepository(Estudiante)
  private readonly estudianteRepository: Repository<Estudiante>) { }

  create(createEstudianteDto: CreateEstudianteDto) {
    return 'This action adds a new estudiante';
  }

  findAll(): Promise<Estudiante[]> {
    return this.estudianteRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    const query: FindOneOptions = { where: { idEstudiante: id } }
    const estudianteFound: Estudiante = await this.estudianteRepository.findOne(query)
    if (!estudianteFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Estudiante not found'
    }, HttpStatus.NOT_FOUND)
    return estudianteFound
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
