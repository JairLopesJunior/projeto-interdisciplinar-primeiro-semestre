import { Injectable } from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';

@Injectable()
export class PsicologosService {

  create(createPsicologoDto: CreatePsicologoDto) {
    return 'This action adds a new psicologo';
  }

  findAll() {
    return `This action returns all psicologos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} psicologo`;
  }

}
