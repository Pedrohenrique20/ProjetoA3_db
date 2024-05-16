import { Restaurant } from "src/restaurant/restaurant.entity";
import { User } from "src/user/entity/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('restaurant_admins')
export class RestaurantAdmins{

    @PrimaryColumn()
    restaurant_id: number;

    @PrimaryColumn()
    user_id: number;

    @ManyToOne(() => Restaurant, restaurant => restaurant.restaurantadmins)
    @JoinColumn({ name: 'restaurant_id'})
    restaurant: Restaurant;

    @ManyToOne(() => User, user => user.restaurantadmins)
    @JoinColumn({ name: 'user_id'})
    user: User;

}
