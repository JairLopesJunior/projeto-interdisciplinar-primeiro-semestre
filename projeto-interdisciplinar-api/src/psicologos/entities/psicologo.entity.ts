import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Psicologo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ length: 100, nullable: false })
    email: string;

    @Column({ length: 11, nullable: false })
    telefone: string;

    @Column({ nullable: false })
    crp: string;

    @Column({ nullable: false })
    preco: number;

    @Column("text", { array: true })
    experiencia: string[];

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
