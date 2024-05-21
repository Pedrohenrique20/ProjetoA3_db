import { Restaurant } from "src/restaurant/restaurant.entity";
import { Tables } from "src/table/entity/table.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('reservation')
export class Reservation {
    @PrimaryGeneratedColumn()
    reservation_id: number;

    @Column()
    reservation_date: Date;

    @Column()
    reservation_number_of_people: number;

    @PrimaryColumn()
    restaurant_id: number;

    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    table_id: number;
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.reservation)
    @JoinColumn({ name: 'restaurant_id'})
    restaurant: Restaurant;

    @ManyToOne(() => User, user => user.reservation)
    @JoinColumn({ name: 'user_id'})
    user: User;
    
    @ManyToOne(() => Tables, table => table.reservation)
    @JoinColumn({ name: 'table_id'})
    tables: Tables;

}
