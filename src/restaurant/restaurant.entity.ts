import { Menu } from "src/menu/entity/menu.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('restaurant')
export class Restaurant {
    @PrimaryGeneratedColumn()
    restaurant_id: number;

    @Column({length:20, unique: true })
    name: string;

    @Column({ length:240})
    description: string;s

    @Column({length: 40})
    address: string;

    @OneToOne(() => Menu, menu => menu.restaurant)
    @JoinColumn({name: 'menu_id'})
    menu: Menu;

<<<<<<< HEAD
    
=======
    @ManyToMany(() => Admins, admins => admins.restaurants)
    @JoinColumn({name: "Administradores"})
    admins: Admins[];
>>>>>>> parent of f64e3be (Crud de Restaurante feito)
}
