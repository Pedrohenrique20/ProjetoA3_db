import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/product.entity';
import { Menu } from 'src/menu/entity/menu.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ length: 240 })
    category_description: string;

    @Column({ length: 40, unique: true })
    category_name: string;

    @OneToMany(() => Product, (product) => product.category)
    @JoinColumn({name: 'product_id'})
    products: Product[];

    @ManyToOne(() => Menu, menu => menu.categories)
    @JoinColumn({ name: "menu_id" })
    menu: Menu;

    @ManyToOne(() => Restaurant, restaurant => restaurant.category)
    @JoinColumn({ name: "restaurant_id" })
    restaurant: Restaurant;

}