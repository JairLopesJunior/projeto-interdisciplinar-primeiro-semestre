import { usuarioProviders } from './../models/usuario.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...usuarioProviders
    ],
})
export class UsuarioModule {}