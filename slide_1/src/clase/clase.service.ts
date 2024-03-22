import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ClaseService {
  constructor(@InjectRepository(Clase) private readonly claseRepository: Repository<CreateClaseDto>) { }

  async createClase(createClaseDto: CreateClaseDto): Promise<CreateClaseDto> {
    const newClase = this.claseRepository.create(createClaseDto)
    return this.claseRepository.save(newClase)
  }

  async findAllClase(): Promise<CreateClaseDto[]> {
    return this.claseRepository.find()
  }

  async findOneClase(id: number): Promise<CreateClaseDto> {
    const query: FindOneOptions = { where: { idClase: id } }
    const userFound = await this.claseRepository.findOne(query)
    if (!userFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: `no existe la clase que buscas`
    }, HttpStatus.NOT_FOUND)
    return userFound
  }

  async updateClase(id: number, updateClaseDto: UpdateClaseDto): Promise<CreateClaseDto> {
    const query: FindOneOptions = { where: { idClase: id } }
    const userFound = await this.claseRepository.findOne(query)
    if (!userFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: `no existe la clase que buscas`
    }, HttpStatus.NOT_FOUND)
    const updateClase = Object.assign(userFound, updateClaseDto)
    return updateClase
  }

  async removeClase(id: number): Promise<CreateClaseDto> {
    const query: FindOneOptions = { where: { idClase: id } }
    const userFound = await this.claseRepository.findOne(query)
    if (!userFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: `no existe la clase que buscas`
    }, HttpStatus.NOT_FOUND)
    const removeClase = await this.claseRepository.remove(userFound)
    return removeClase
  }
}
