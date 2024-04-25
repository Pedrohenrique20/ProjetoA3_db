import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/entity/category.entity';

@Entity('product')
export class Product { 
    @PrimaryGeneratedColumn()
    product_id: string;

    @Column()
    product_price: number;

    @Column({length: 40})
    product_name: string; 

    @Column({length:240})
    product_description: string; 
    
    @ManyToOne(() => Category, (category) => category.products)
    category: Category; 
    
    
}