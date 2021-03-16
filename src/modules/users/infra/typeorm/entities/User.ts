import { v4 } from 'uuid';
import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(name: string, email: string, password: string) {
    this.id = v4();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
