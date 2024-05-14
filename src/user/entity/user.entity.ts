import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Filiacao } from './filiacao.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

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

  @OneToMany(() => Filiacao, filiacao => filiacao.user)
  filiacoes: Filiacao[];

  @ManyToMany(() => Restaurant, restaurant => restaurant.user )
  @JoinTable({ name: "Restaurants"})
  restaurants: Restaurant[];
}
