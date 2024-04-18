import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    category_id: string;

    @Column({ length: 240 })
    description: string;

    @Column({ length: 40, unique: true })
    category_name: string;
}