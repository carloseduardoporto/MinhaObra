import {Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import Construction from '@modules/constructions/infra/typeorm/entities/Construction';

@Entity('entries')
class Entrie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  quantity: Number;

  @Column()
  isPayed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  construction_id: string;

  @ManyToOne(() => Construction, construction => construction.entrie_id)
  @JoinColumn({ name: 'construction_id'})
  construction: Construction;

}

export default Entrie;
