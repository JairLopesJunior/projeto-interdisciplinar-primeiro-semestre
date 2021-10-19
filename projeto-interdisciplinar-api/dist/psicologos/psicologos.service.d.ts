import { Repository } from 'typeorm';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { Psicologo } from './entities/psicologo.entity';
export declare class PsicologosService {
    private repository;
    constructor(repository: Repository<Psicologo>);
    create(createPsicologoDto: CreatePsicologoDto): Promise<Psicologo>;
    findAll(): Promise<Psicologo[]>;
    findOne(id: string): Promise<Psicologo>;
}
