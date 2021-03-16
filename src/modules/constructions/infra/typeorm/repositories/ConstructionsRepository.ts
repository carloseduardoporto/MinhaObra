import ICreateConstructionsDTO from '@modules/constructions/dtos/ICreateConstructionsDTO';
import IConstructionsRepository from '@modules/constructions/repositories/IConstructionsRepository';
import { Repository, getRepository, EntityRepository } from 'typeorm';
import Construction from '../entities/Construction';


class ConstructionsRepository implements IConstructionsRepository {
  private ormRepository: Repository<Construction>;

  constructor() {
    this.ormRepository = getRepository(Construction);
  }

  public async create({ name, metragem, valorDaObra, valorPorMetragem, user_id, started_at  }: ICreateConstructionsDTO): Promise<Construction> {

    const user = this.ormRepository.create({
      name,
      metragem,
      valorDaObra,
      user_id,
      valorPorMetragem,
      started_at,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(construction: Construction): Promise<Construction> {
    return this.ormRepository.save(construction);
  }

}


export default ConstructionsRepository;
