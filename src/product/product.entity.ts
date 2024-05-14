import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/entity/category.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Menu } from 'src/menu/entity/menu.entity';

@Entity('product')
export class Product { 
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_price: number;

    @Column({length: 40, unique: true})
    product_name: string; 

    @Column({length:240})
    product_description: string; 
    
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category: Category; 
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.product)
    @JoinColumn({name: "resturant_id"})
    restaurant: Restaurant;
    
    @ManyToOne(() => Menu, menu => menu.products)
    @JoinColumn({name: "menu_id"})
    menu: Menu;
}