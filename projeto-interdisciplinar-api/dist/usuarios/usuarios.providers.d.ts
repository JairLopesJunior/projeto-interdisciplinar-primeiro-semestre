import { Usuario } from './entities/usuario.entity';
import { Connection } from 'typeorm';
export declare const usuariosProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Usuario>;
    inject: string[];
}[];
