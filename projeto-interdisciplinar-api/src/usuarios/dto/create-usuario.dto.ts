import { Entity } from "typeorm";

@Entity()
export class CreateUsuarioDto {

    nome!: string;
    profissao!: string;
    sobreMim?: string;
    relato!: string;
    isAnonimo!: boolean;
    estado!: string;
    cidade!: string;
    imagem?: string;
}
