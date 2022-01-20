import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('timestamp', { default: () => 'NOW' })
  create_time: number;

  @Column('timestamp', { default: () => 'NOW' })
  update_time: number;
}
