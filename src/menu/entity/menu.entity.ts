import { Category } from "src/category/entity/category.entity";
import { Product } from "src/product/product.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
export class Menu {
    @PrimaryGeneratedColumn()
    menu_id: number;
    

    @OneToOne(() => Restaurant, restaurant => restaurant.menu)
    @JoinColumn()
    restaurant: Restaurant;

    @OneToMany(() => Category, category => category.menu)
    categories: Category[];

    @OneToMany(() => Product, product => product.menu)
    products: Product[];
}
