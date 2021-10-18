import { Injectable } from '@nestjs/common';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';

@Injectable()
export class PsicologosService {
  create(createPsicologoDto: CreatePsicologoDto) {
    return 'This action adds a new psicologo';
  }

  findAll() {
    return `This action returns all psicologos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} psicologo`;
  }

  update(id: number, updatePsicologoDto: UpdatePsicologoDto) {
    return `This action updates a #${id} psicologo`;
  }

  remove(id: number) {
    return `This action removes a #${id} psicologo`;
  }
}
