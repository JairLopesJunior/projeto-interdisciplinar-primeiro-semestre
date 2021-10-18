import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Psicologo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    nome: string;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 15 })
    telefone: string;

    @Column({ length: 6 })
    crp: number;

    @Column()
    preco: number;

    @Column("text")
    experiencia: string;

    @Column({ length: 80 })
    facebook: string;

    @Column({ length: 30 })
    estado: string;

    @Column({ length: 50 })
    cidade: string;

    @Column("text")
    sobreMim: string;

    @Column("text")
    imagem: string;
}
