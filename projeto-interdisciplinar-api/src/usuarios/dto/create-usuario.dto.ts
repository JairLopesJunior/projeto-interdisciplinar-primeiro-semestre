import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateUsuarioDto {

    @IsString({ message: 'Informe um nome válido!' })
    @IsNotEmpty({ message: 'O campo nome precisa ser fornecido!' })
    @MinLength(120)
    nome!: string;

    @IsString({ message: 'Informe um nome válido!' })
    @IsNotEmpty({ message: 'O campo nome precisa ser fornecido!' })
    @MinLength(120)
    profissao!: string;

    @IsString({ message: 'Informe um texto sobreMim válido!' })
    @IsOptional()
    sobreMim?: string;

    @IsString({ message: 'Informe um relato válido!' })
    @IsNotEmpty({ message: 'O campo relato precisa ser fornecido!' })
    relato!: string;

    @IsBoolean()
    isAnonimo!: boolean;

    @IsString({ message: 'Informe um estado válido!' })
    @MinLength(30)
    @IsNotEmpty({ message: 'O campo estado precisa ser fornecido!' })
    estado!: string;

    @IsString({ message: 'Informe uma cidade válido!' })
    @MinLength(50)
    @IsNotEmpty({ message: 'O campo cidade precisa ser fornecido!' })
    cidade!: string;

    @IsString({ message: 'Informe uma imagem válida!' })
    @IsOptional()
    imagem?: string;
}
