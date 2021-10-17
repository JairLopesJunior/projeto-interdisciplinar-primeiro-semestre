import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psicologo{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    nome!: string;

    @Column({ length: 60 })
    email: string;

    @Column({ length: 15 })
    telefone: string;

    @Column({ length: 6 })
    crp: string;

    @Column('int')
    preco: number;

    @Column("text")
    experiencia: string;

    @Column({ length: 150 })
    facebook: string;

    @Column({ length: 20 })
    estado: string;

    @Column({ length: 120 })
    cidade: string;

    @Column("text")
    sobreMim: string;

    @Column("text")
    imagem: string;
}