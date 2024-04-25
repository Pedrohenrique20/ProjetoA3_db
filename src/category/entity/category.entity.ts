import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/product.entity';

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: string;

    @Column({ length: 240 })
    category_description: string;

    @Column({ length: 40, unique: true })
    category_name: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

}