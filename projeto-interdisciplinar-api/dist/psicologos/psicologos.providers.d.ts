import { Connection } from 'typeorm';
import { Psicologo } from './entities/psicologo.entity';
export declare const psicologosProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Psicologo>;
    inject: string[];
}[];
