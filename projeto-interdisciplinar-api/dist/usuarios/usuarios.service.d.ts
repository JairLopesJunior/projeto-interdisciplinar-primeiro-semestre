import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    create(createUsuarioDto: CreateUsuarioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): string;
    remove(id: number): string;
}
