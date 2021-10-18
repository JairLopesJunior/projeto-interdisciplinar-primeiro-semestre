import { Connection } from 'typeorm';
import { Psicologo } from './psicologo.entity';

export const psicologoProviders = [
    {
        provide: 'PSICOLOGO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Psicologo),
        inject: ['DATABASE_CONNECTION'],
    },
];