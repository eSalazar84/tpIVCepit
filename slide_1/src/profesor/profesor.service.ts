import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';

@Injectable()
export class ProfesorService {

  constructor(@InjectRepository(Profesor)
  private readonly profesorRepository: Repository<Profesor>) { }

  create(createProfesorDto: CreateProfesorDto) {
    return 'This action adds a new profesor';
  }

  async findAll(): Promise<Profesor[]> {
    return await this.profesorRepository.find();
  }

  async findOne(id: number): Promise<Profesor> {
    const query: FindOneOptions = { where: { idProfesor: id } }
    const profesorFound: Profesor = await this.profesorRepository.findOne(query)
    if (!profesorFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Profesor not found'
    }, HttpStatus.NOT_FOUND)
    return profesorFound
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
