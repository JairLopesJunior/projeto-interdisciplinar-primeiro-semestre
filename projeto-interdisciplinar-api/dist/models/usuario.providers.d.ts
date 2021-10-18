import { Usuario } from './usuario.entity';
import { Connection } from 'typeorm';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Usuario>;
    inject: string[];
}[];
