import { Restaurant } from "src/restaurant/restaurant.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('admins')
export class Admins {
    @PrimaryGeneratedColumn()
    admins_id: number;
  
    @Column({ unique: true, length: 40 })
    admin_email: string;
  
    @Column({ length: 40 })
    admin_name: string;
  
    @Column({ length: 60 })
    admin_password: string;

    @ManyToMany(() => Restaurant, restaurant => restaurant.admins)
    @JoinTable({name: "Restaurants"})
    restaurants: Restaurant[];
}
