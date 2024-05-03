import { Category } from "src/category/entity/category.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
export class Menu {
    @PrimaryGeneratedColumn()
    menu_id: number;

    @OneToOne(() => Restaurant, restaurant => restaurant.menu)
    @JoinColumn({name: 'restaurant_id'})
    restaurant: Restaurant;

    @OneToMany(() => Category, category => category.menu)
    @JoinColumn( { name: 'menu_categories'} ) 
    categories: Category[];
}
