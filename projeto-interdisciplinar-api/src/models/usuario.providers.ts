import { Usuario } from './usuario.entity';
import { Connection } from 'typeorm';

export const usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Usuario),
        inject: ['DATABASE_CONNECTION'],
    },
];