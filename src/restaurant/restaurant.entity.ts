
import { Column, Entity,  ManyToMany,  PrimaryGeneratedColumn } from "typeorm";

import { Admins } from "src/admins/admins.entity";

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('restaurant')
export class Restaurant {
    @PrimaryGeneratedColumn()
    restaurant_id: number;

    @Column({length:40, unique: true })
    name: string;

    @Column({ length:240})
    description: string;

    @Column({length: 40})
    address: string;

   

    @ManyToMany(() => Admins, admins => admins.restaurants)
    @JoinTable({name: "Administradores"})
    admins: Admins[];
}
