import { Connection } from 'typeorm';
import { Psicologo } from './psicologo.entity';
export declare const psicologoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Psicologo>;
    inject: string[];
}[];
