import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('stages')
class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  constructor(name: string) {
    this.id = v4();
    this.name = name;
  }
}

export default Stage;
