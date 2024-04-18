import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User { 
    @PrimaryGeneratedColumn()
    product_id: string;

    @Column({length:10.2})
    product_price: number;

    @Column({length: 40})
    product_name: string; 

    @Column({length:240})
    product_description: string; 
    
    @Column({length: 40})
    product_category: number; 
    
    
    
}