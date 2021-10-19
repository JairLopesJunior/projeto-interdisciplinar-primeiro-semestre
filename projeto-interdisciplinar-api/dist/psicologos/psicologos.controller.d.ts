import { PsicologosService } from './psicologos.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
export declare class PsicologosController {
    private readonly psicologosService;
    constructor(psicologosService: PsicologosService);
    create(createPsicologoDto: CreatePsicologoDto): Promise<import("./entities/psicologo.entity").Psicologo>;
    findAll(): Promise<import("./entities/psicologo.entity").Psicologo[]>;
    findOne(id: string): Promise<import("./entities/psicologo.entity").Psicologo>;
}
