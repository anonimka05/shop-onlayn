import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_service')
export class UserService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', length: 13, nullable: true })
  phone: string;

  @Column({ type: 'varchar' })
  image: string;
}
