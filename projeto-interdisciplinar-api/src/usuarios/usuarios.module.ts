import { usuariosProviders } from './usuarios.providers';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [
    ...usuariosProviders,
    UsuariosService
  ]
})
export class UsuariosModule {}