import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Filiacao } from './filiacao.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { UserRole } from './UserRole';
import { RestaurantAdmins } from 'src/restaurant_admins/entity/restaurant_admins.entity';
import { Reservation } from 'src/resarvation/entity/reservation.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true, length: 40 })
  user_email: string;

  @Column({ length: 40 })
  user_name: string;

  @Column({ length: 60 })
  user_password: string;

  @Column({ length: 15})
  user_tel: number;

  @Column({length: 40})
  user_address: string;

  @Column({length: 40})
  user_city: string;

  @Column({length: 40})
  user_district: string;

  @Column({length:40})
  user_state: string;
  
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.User
  })
  is_admin: UserRole;

  @OneToMany(() => RestaurantAdmins, restaurantadmins => restaurantadmins.user)
  restaurantadmins: RestaurantAdmins[];

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservation: Reservation[];
}