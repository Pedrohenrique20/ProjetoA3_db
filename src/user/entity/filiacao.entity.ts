import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('filiacao')
export class Filiacao {
    @PrimaryGeneratedColumn()
    id_perfil: number;

    @Column({ length: 40 })
    nome: string;

    @Column({ length: 40 })
    endereco: string;

    @Column({ length: 30 })
    cidade: string;

    @Column({ length: 30 })
    bairro: string;

    @Column({ length: 2 })
    uf: string;

    @ManyToOne(() => User, user => user.filiacoes)
    user: User;  
}