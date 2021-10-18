import { PsicologosService } from './psicologos.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';
export declare class PsicologosController {
    private readonly psicologosService;
    constructor(psicologosService: PsicologosService);
    create(createPsicologoDto: CreatePsicologoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePsicologoDto: UpdatePsicologoDto): string;
    remove(id: string): string;
}
