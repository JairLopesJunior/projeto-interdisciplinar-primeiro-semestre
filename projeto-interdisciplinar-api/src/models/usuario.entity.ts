import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psicologo{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    nome: string;

    @Column({ length: 60 })
    profissao: string;

    @Column("text")
    sobreMim: string;

    @Column("text")
    relato: string;

    @Column()
    isAnonimo: boolean;

    @Column({ length: 20 })
    estado: string;

    @Column({ length: 120 })
    cidade: string;

    @Column("text")
    imagem: string;
}