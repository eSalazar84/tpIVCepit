import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  constructor(@InjectRepository(Ciudad) private readonly ciudadRepository: Repository<CreateCiudadDto>) { }

  async createCiudad(ciudad: CreateCiudadDto): Promise<CreateCiudadDto> {
    const { nombre }: CreateCiudadDto = ciudad;
    const query = await this.ciudadRepository.findOne({ where: { nombre } })
    if (query) throw new HttpException({
      status: HttpStatus.CONFLICT, error: `la ciudad con el nombre ${nombre} ya existe.`
    }, HttpStatus.CONFLICT)
    const newCiudad = this.ciudadRepository.create(ciudad);
    return this.ciudadRepository.save(newCiudad)
  }

  async findAllCiudad(): Promise<CreateCiudadDto[]> {
    return await this.ciudadRepository.find();
  }

  async findOneCiudad(id: number): Promise<CreateCiudadDto> {
    const query: FindOneOptions = { where: { idCiudad: id } }
    const ciudadFound = await this.ciudadRepository.findOne(query)
    if (!ciudadFound) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: 'City not found'
    },
      HttpStatus.NOT_FOUND)
    return ciudadFound
  }

  async updateCiudad(id: number, updateCiudadDto: UpdateCiudadDto): Promise<CreateCiudadDto> {
    const ciudadFound: FindOneOptions = { where: { idCiudad: id } }
    const ciudad = await this.ciudadRepository.findOne(ciudadFound)
    if (!ciudad) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: `City not found`
    }, HttpStatus.NOT_FOUND)
    const updateCiudad = Object.assign(ciudad, updateCiudadDto)
    return this.ciudadRepository.save(updateCiudad)
  }

  async removeCiudad(id: number): Promise<CreateCiudadDto> {
    const ciudadFound: FindOneOptions = { where: { idCiudad: id } }
    const ciudad = await this.ciudadRepository.findOne(ciudadFound)
    if (!ciudad) throw new HttpException({
      status: HttpStatus.NOT_FOUND, error: `No se encuentra la ciudad`
    }, HttpStatus.NOT_FOUND)
    const removeCiudad = await this.ciudadRepository.remove(ciudad)
    return removeCiudad
  }
}
