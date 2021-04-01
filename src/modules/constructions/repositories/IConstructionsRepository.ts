import ICreateConstructionsDTO from '../dtos/ICreateConstructionsDTO';
import Construction from '../infra/typeorm/entities/Construction';

export default interface IConstructionsRepository {
  create({
    name,
    metragem,
    valorDaObra,
    user_id,
    started_at,
  }: ICreateConstructionsDTO): Promise<Construction>;
  save(construction: Construction): Promise<Construction>;
  listAllConstructions(id: string): Promise<Construction[]>;
}
