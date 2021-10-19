import { Usuario } from './entities/usuario.entity';
import { Connection } from 'typeorm';

export const usuariosProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
];