
export class CreatePsicologoDto {

    nome!: string;
    email!: string;
    telefone!: string;
    preco!: number;
    crp!: string;
    experiencia!: string[];
    facebook?: string;
    estado!: string;
    cidade!: string;
    sobreMim!: string;
    imagem?: string;
}
