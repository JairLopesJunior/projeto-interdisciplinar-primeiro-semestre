import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    create(createUsuarioDto: CreateUsuarioDto): string;
    findAll(): string;
    findOne(id: number): string;
}
