import { inject, injectable } from 'tsyringe';
import ISuppliersRepository from '../repositories/ISuppliersRepository';
import Supplier from '../infra/typeorm/entities/Supplier';
import ICreateSuppliersDTO from '../dtos/ICreateSuppliersDTO';

@injectable()
export default class CreateSupplierService {
  constructor(
    @inject('SuppliersRepository')
    private suppliersRepository: ISuppliersRepository,
  ) {}

  public async execute({
    name,
    phone,
  }: ICreateSuppliersDTO): Promise<Supplier> {
    const supplier = await this.suppliersRepository.create({ name, phone });

    return supplier;
  }
}
