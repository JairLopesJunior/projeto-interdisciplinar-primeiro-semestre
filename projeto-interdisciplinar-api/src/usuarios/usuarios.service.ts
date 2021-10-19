import { Usuario } from './entities/usuario.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private repository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {

    const psicologo = this.repository.create(createUsuarioDto);
    return this.repository.save(psicologo);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

}
