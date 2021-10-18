import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class CreatePsicologoDto {

    @IsString({ message: 'Informe um nome válido!' })
    @IsNotEmpty({ message: 'O campo nome precisa ser fornecido!' })
    @MinLength(120)
    nome!: string;

    @IsString({ message: 'Informe um email válido!' })
    @IsEmail()
    @MinLength(50)
    email!: string;

    @IsString({ message: 'Informe um telefone válido!' })
    @IsPhoneNumber()
    @MinLength(15)
    telefone!: string;

    @IsString({ message: 'Informe um crp válido!' })
    @MinLength(6)
    crp!: number;

    preco!: number;

    @IsString({ message: 'Informe uma experiência válida!' })
    @IsNotEmpty({ message: 'O campo experiência precisa ser fornecido!' })
    experiencia!: string;

    @IsString({ message: 'Informe um facebook válido!' })
    @IsOptional()
    facebook?: string;

    @IsString({ message: 'Informe um estado válido!' })
    @MinLength(30)
    @IsNotEmpty({ message: 'O campo estado precisa ser fornecido!' })
    estado!: string;

    @IsString({ message: 'Informe uma cidade válido!' })
    @MinLength(50)
    @IsNotEmpty({ message: 'O campo cidade precisa ser fornecido!' })
    cidade!: string;

    @IsString({ message: 'Informe um texto sobreMim válido!' })
    @IsNotEmpty({ message: 'O campo sobreMim precisa ser fornecido!' })
    sobreMim!: string;

    @IsString({ message: 'Informe uma imagem válida!' })
    @IsOptional()
    imagem?: string;
}
