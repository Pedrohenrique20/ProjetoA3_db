import { Category } from "src/category/entity/category.entity";
import { Menu } from "src/menu/entity/menu.entity";
import { Product } from "src/product/product.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('restaurant')
export class Restaurant {
    @PrimaryGeneratedColumn()
    restaurant_id: number;

    @Column({length:40, unique: true })
    name: string;

    @Column({ length:240})
    description: string;

    @Column({length: 40})
    address: string;

    @ManyToMany(() => User, user => user.restaurants)
    @JoinTable({name: "Usuarios administradores"})
    user:  User[];

    @OneToMany(() => Category, category => category.restaurant)
    @JoinColumn({name: "categories"})
    category: Category[];

    @OneToMany(() => Product, product => product.restaurant)
    @JoinColumn({name: "products" })
    product: Product[];
}
