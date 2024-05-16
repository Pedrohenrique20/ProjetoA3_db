import { Category } from "src/category/entity/category.entity";
import { Menu } from "src/menu/entity/menu.entity";
import { Product } from "src/product/product.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('product_menu')
export class ProductMenu {

    @PrimaryColumn()
    restaurant_id: number;

    @PrimaryColumn()
    category_id: number;

    @PrimaryColumn()
    product_id: number;

    @PrimaryColumn()
    menu_id: number;

    @ManyToOne(() => Restaurant, restaurant => restaurant.productmenu)
    @JoinColumn({ name: 'restaurant_id'})
    restaurant: Restaurant;

    @ManyToOne(() => Category, (category) => category.productmenu)
    @JoinColumn({name: 'category_id'})
    category: Category; 

    @ManyToOne(() => Product, (product) => product.productmenu)
    @JoinColumn({name: 'product_id'})
    product: Product; 
    
    @ManyToOne(() => Menu, menu => menu.productmenu)
    @JoinColumn({name: 'menu_id'})
    menu: Menu;
}
