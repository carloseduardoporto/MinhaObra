import ICreateConstructionsDTO from '@modules/constructions/dtos/ICreateConstructionsDTO';
import Construction from '@modules/constructions/infra/typeorm/entities/Construction';
import IConstructionsRepository from '@modules/constructions/repositories/IConstructionsRepository';
import { v4 } from 'uuid';

class FakeConstructionsRepository implements IConstructionsRepository {
  private constructions: Construction[] = [];

  public async create({
    name,
    metragem,
    valorDaObra,
    user_id,
    started_at,
  }: ICreateConstructionsDTO): Promise<Construction> {
    const construction = new Construction();

    Object.assign(construction, {
      id: v4(),
      name,
      metragem,
      valorDaObra,
      user_id,
      started_at,
    });

    this.constructions.push(construction);

    return construction;
  }

  public async save(construction: Construction): Promise<Construction> {
    const findIndex = this.constructions.findIndex(
      findConstruction => findConstruction.id === construction.id,
    );

    this.constructions[findIndex] = construction;

    return construction;
  }

  public async listAllConstructions(user_id: string): Promise<Construction[]> {
    return this.constructions.filter(
      construction => construction.user_id === user_id,
    );
  }
}

export default FakeConstructionsRepository;
