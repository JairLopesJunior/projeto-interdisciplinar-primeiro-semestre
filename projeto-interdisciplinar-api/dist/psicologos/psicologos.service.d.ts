import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
export declare class PsicologosService {
    create(createPsicologoDto: CreatePsicologoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePsicologoDto: UpdatePsicologoDto): string;
    remove(id: number): string;
}
