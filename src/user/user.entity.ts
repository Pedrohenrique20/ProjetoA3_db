import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column({ unique: true, length: 40 })
  user_email: string;

  @Column({ length: 60 })
  user_password: string;
}
