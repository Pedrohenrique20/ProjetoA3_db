import { Reservation } from "src/resarvation/entity/reservation.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('table')
export class Tables {
    @PrimaryGeneratedColumn()
    table_id: number;

    @Column({unique: true})
    table_number: number;

    @Column()
    table_capacity: number;

    @Column({ length:255})
    table_details: string;
    
    @PrimaryColumn()
    restaurant_id: number;
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.tables)
    @JoinColumn({ name: 'restaurant_id'})
    restaurant: Restaurant;

    @OneToMany(() => Reservation, reservation => reservation.tables)
    reservation: Reservation[];
    
}
