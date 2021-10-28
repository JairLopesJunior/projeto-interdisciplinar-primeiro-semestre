import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ length: 60, nullable: false })
    profissao: string;

    @Column("text")
    sobreMim: string;

    @Column("text", { nullable: false })
    relato: string;

    @Column({ nullable: false })
    tipo: number;

    @Column({ length: 20, nullable: false })
    estado: string;

    @Column({ length: 120, nullable: false })
    cidade: string;

    @Column("text")
    imagem: string;
}
