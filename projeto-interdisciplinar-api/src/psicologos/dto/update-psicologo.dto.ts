import { PartialType } from '@nestjs/mapped-types';
import { CreatePsicologoDto } from './create-psicologo.dto';

export class UpdatePsicologoDto extends PartialType(CreatePsicologoDto) {}
