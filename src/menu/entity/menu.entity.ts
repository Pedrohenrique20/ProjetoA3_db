import { Category } from "src/category/entity/category.entity";
import { Product } from "src/product/product.entity";
import { ProductMenu } from "src/product_menu/entity/product_menu.entity";
import { Restaurant } from "src/restaurant/restaurant.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
export class Menu {
    @PrimaryGeneratedColumn()
    menu_id: number;

    @Column({ length: 40, unique: true })
    menu_name: string;

    @Column({ length: 255 })
    menu_description: string;

    @PrimaryColumn()
    restaurant_id: number;
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.menu)
    @JoinColumn({ name: 'restaurant_id'})
    restaurant: Restaurant;

    @OneToMany(() => Category, category => category.menu)
    category: Category[];

    @OneToMany(() => ProductMenu, productmenu => productmenu.menu)
    productmenu: ProductMenu[];
}
