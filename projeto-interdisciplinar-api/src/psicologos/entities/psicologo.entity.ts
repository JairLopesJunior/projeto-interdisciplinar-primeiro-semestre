import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Psicologo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120, nullable: false })
    nome: string;

    @Column({ length: 50, nullable: false })
    email: string;

    @Column({ length: 15, nullable: false })
    telefone: string;

    @Column({ nullable: false })
    crp: number;

    @Column({ nullable: false })
    preco: number;

    @Column("text", { nullable: false })
    experiencia: string;

    @Column()
    facebook: string;

    @Column({ length: 30, nullable: false })
    estado: string;

    @Column({ length: 50, nullable: false })
    cidade: string;

    @Column("text", { nullable: false })
    sobreMim: string;

    @Column("text")
    imagem: string;
}
