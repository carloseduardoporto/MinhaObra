import ICreateSuppliersDTO from '@modules/supplier/dtos/ICreateSuppliersDTO';
import ISuppliersRepository from '@modules/supplier/repositories/ISuppliersRepository';
import { getRepository, Repository } from 'typeorm';
import Supplier from '../entities/Supplier';

export default class SuppliersRepository implements ISuppliersRepository {
  private ormRepository: Repository<Supplier>;

  constructor() {
    this.ormRepository = getRepository(Supplier);
  }

  public async create({ name, phone }: ICreateSuppliersDTO): Promise<Supplier> {
    const supplier = this.ormRepository.create({ name, phone });

    await this.ormRepository.save(supplier);

    return supplier;
  }

  public async save(supplier: Supplier): Promise<Supplier> {
    return this.ormRepository.save(supplier);
  }

  public async findByName(name: string): Promise<Supplier | undefined> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async listAllSuppliers(): Promise<Supplier[]> {
    return this.ormRepository.find({ order: { name: 'ASC' } });
  }
}
