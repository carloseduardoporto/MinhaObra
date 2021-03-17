import { inject, injectable } from 'tsyringe';
import ICreateConstructionsDTO from '../dtos/ICreateConstructionsDTO';
import Construction from '../infra/typeorm/entities/Construction';
import IConstructionsRepository from '../repositories/IConstructionsRepository';

@injectable()
class CreateConstructionService {
  constructor(
    @inject('ConstructionsRepository')
    private constructionsRepository: IConstructionsRepository,
  ) {}

  public async execute({
    name,
    metragem,
    valorDaObra,
    user_id,
    started_at,
  }: ICreateConstructionsDTO): Promise<Construction> {
    const construction = await this.constructionsRepository.create({
      name,
      metragem,
      valorDaObra,
      user_id,
      started_at,
    });

    await this.constructionsRepository.save(construction);

    return construction;
  }
}

export default CreateConstructionService;

// Data que começou?
// valor por metro quadrado calculado?
