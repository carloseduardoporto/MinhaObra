import ICreateSuppliersDTO from '../dtos/ICreateSuppliersDTO';
import Supplier from '../infra/typeorm/entities/Supplier';

export default interface ISuppliersRepository {
  create({ name, phone }: ICreateSuppliersDTO): Promise<Supplier>;
  save(supplier: Supplier): Promise<Supplier>;
  findByName(name: string): Promise<Supplier | undefined>;
  listAllSuppliers(): Promise<Supplier[]>;
}
