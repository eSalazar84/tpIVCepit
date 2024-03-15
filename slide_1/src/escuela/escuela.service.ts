import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EscuelaService {
  private escuelas: Escuela[] = [];

  constructor(@InjectRepository(Escuela)
  private readonly escuelaRepository: Repository<Escuela>) { }

  create(createEscuelaDto: CreateEscuelaDto) {
    return 'This action adds a new escuela';
  }

  async findAll(): Promise<Escuela[]> {
    return await this.escuelaRepository.find();
  }

  async findOne(id: number): Promise<Escuela> {
    const query: FindOneOptions = { where: { idEscuela: id } }
    const escuelaFound: Escuela = await this.escuelaRepository.findOne(query)
    if (!escuelaFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'School not found'
    },
      HttpStatus.NOT_FOUND)
    return escuelaFound;
  }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
