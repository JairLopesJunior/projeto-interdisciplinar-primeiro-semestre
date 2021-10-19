import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { Psicologo } from './entities/psicologo.entity';

@Injectable()
export class PsicologosService {

  constructor(
    @Inject('PSICOLOGO_REPOSITORY')
    private repository: Repository<Psicologo>,
  ) {}

  create(createPsicologoDto: CreatePsicologoDto) {

    const psicologo = this.repository.create(createPsicologoDto);
    return this.repository.save(psicologo);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

}
