import { Category } from "src/category/entity/category.entity";
import { Menu } from "src/menu/entity/menu.entity";
import { Product } from "src/product/product.entity";
import { ProductMenu } from "src/product_menu/entity/product_menu.entity";
import { RestaurantAdmins } from "src/restaurant_admins/entity/restaurant_admins.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('restaurant')
export class Restaurant {
    @PrimaryGeneratedColumn()
    restaurant_id: number;

    @Column({length:40, unique: true })
    restaurant_name: string;

    @Column({ length:255})
    restaurant_description: string;

    @Column({length: 60})
    restaurant_address: string;

    @Column({ length: 15})
    restaurant_tel: bigint;

    @OneToMany(() => Category, category => category.restaurant)
    category: Category[];

    @OneToMany(() => Product, product => product.restaurant)
    product: Product[];

    @OneToMany(() => Menu, menu => menu.restaurant)
    menu: Menu[];

    @OneToMany(() => ProductMenu, productmenu => productmenu.restaurant)
    productmenu: ProductMenu[];

    @OneToMany(() => RestaurantAdmins, restaurantadmins => restaurantadmins.restaurant )
    restaurantadmins: RestaurantAdmins[];
}
