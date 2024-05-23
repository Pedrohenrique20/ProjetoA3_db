import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/entity/category.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Menu } from 'src/menu/entity/menu.entity';
import { ProductMenu } from 'src/product_menu/entity/product_menu.entity';

@Entity('product')
export class Product { 
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_price: number;

    @Column({length: 40, unique: true})
    product_name: string; 

    @Column({length:255})
    product_description: string; 
    
    @PrimaryColumn()
    restaurant_id: number;
    
    @PrimaryColumn()
    category_id: number;

    @OneToMany(() => ProductMenu, productmenu => productmenu.product)
    productmenu: ProductMenu[];

    @ManyToOne(() => Category, category => category.product)
    @JoinColumn({name: 'category_id'})
    category: Category; 
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.product)
    @JoinColumn({name: "resturant_id"})
    restaurant: Restaurant;
    
}