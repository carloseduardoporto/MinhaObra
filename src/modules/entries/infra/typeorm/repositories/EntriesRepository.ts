import ICreateEntriesDTO from '@modules/entries/dtos/ICreateEntriesDTO';
import IEntriesRepository from '@modules/entries/repositories/IEntriesRepository';
import { Repository, getRepository } from 'typeorm';
import Entrie from '../entities/Entrie';

class EntriesRepository implements IEntriesRepository {
  private ormRepository: Repository<Entrie>;

  constructor() {
    this.ormRepository = getRepository(Entrie);
  }

  public async create({
    quantity,
    construction_id,
    isPayed,
    description,
  }: ICreateEntriesDTO): Promise<Entrie> {
    const entrie = this.ormRepository.create({
      quantity,
      construction_id,
      isPayed,
      description,
    });

    await this.ormRepository.save(entrie);

    return entrie;
  }

  public async save(entrie: Entrie): Promise<Entrie> {
    return this.ormRepository.save(entrie);
  }

  public async listAllConstructionEntries(
    construction_id: string,
  ): Promise<Entrie[]> {
    return this.ormRepository.find({ where: { construction_id } });
  }
}

export default EntriesRepository;
