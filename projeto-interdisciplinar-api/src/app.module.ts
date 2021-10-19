import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PsicologosModule } from './psicologos/psicologos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    PsicologosModule, 
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
