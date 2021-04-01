import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('suppliers')
class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  constructor(name: string, phone: string) {
    this.id = v4();
    this.name = name;
    this.phone = phone;
  }
}

export default Supplier;
