import { Connection } from 'typeorm';
import { Psicologo } from './entities/psicologo.entity';

export const psicologosProviders = [
    {
        provide: 'PSICOLOGO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Psicologo),
        inject: ['DATABASE_CONNECTION'],
    },
];