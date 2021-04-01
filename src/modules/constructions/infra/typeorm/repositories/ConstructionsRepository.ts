import ICreateConstructionsDTO from '@modules/constructions/dtos/ICreateConstructionsDTO';
import IConstructionsRepository from '@modules/constructions/repositories/IConstructionsRepository';
import { Repository, getRepository } from 'typeorm';
import Construction from '../entities/Construction';

class ConstructionsRepository implements IConstructionsRepository {
  private ormRepository: Repository<Construction>;

  constructor() {
    this.ormRepository = getRepository(Construction);
  }

  public async create({
    name,
    metragem,
    valorDaObra,
    user_id,
    started_at,
  }: ICreateConstructionsDTO): Promise<Construction> {
    const construction = this.ormRepository.create({
      name,
      metragem,
      valorDaObra,
      user_id,
      started_at,
    });

    await this.ormRepository.save(construction);

    return construction;
  }

  public async save(construction: Construction): Promise<Construction> {
    return this.ormRepository.save(construction);
  }

  public async listAllConstructions(user_id: string): Promise<Construction[]> {
    return this.ormRepository.find({ where: { user_id } });
  }
}

export default ConstructionsRepository;
