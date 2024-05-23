import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/product.entity';
import { Menu } from 'src/menu/entity/menu.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { ProductMenu } from 'src/product_menu/entity/product_menu.entity';

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ length: 255 })
    category_description: string;

    @Column({ length: 40, unique: true })
    category_name: string;

    @PrimaryColumn()
    restaurant_id: number;

    @PrimaryColumn()
    menu_id: number;

    @OneToMany(() => Product, product => product.category)
    product: Product[];

    @OneToMany(() => ProductMenu, productmenu => productmenu.category)
    productmenu: ProductMenu[];

    @ManyToOne(() => Menu, menu => menu.category)
    @JoinColumn({ name: "menu_id" })
    menu: Menu;

    @ManyToOne(() => Restaurant, restaurant => restaurant.category)
    @JoinColumn({ name: "restaurant_id" })
    restaurant: Restaurant;
}
