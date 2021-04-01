import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Entrie from '@modules/entries/infra/typeorm/entities/Entrie';

@Entity('constructions')
class Construction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  valorDaObra: number;

  @Column('decimal')
  metragem: number;

  @Column()
  started_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Entrie, entrie => entrie.construction_id, {
    cascade: true,
  })
  entrie_id: Entrie[];
}

export default Construction;
