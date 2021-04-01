import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { inject, injectable } from 'tsyringe';
import Construction from '../infra/typeorm/entities/Construction';
import IConstructionsRepository from '../repositories/IConstructionsRepository';

@injectable()
class ShowConstructionService {
  constructor(
    @inject('ConstructionsRepository')
    private constructionsRepository: IConstructionsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(user_id: string): Promise<Construction[]> {
    let constructions = await this.cacheProvider.recover<Construction[]>(
      `constructions-list:${user_id}`,
    );

    if (!constructions) {
      constructions = await this.constructionsRepository.listAllConstructions(
        user_id,
      );

      await this.cacheProvider.save(
        `constructions-list:${user_id}`,
        constructions,
      );
    }

    return constructions;
  }
}

export default ShowConstructionService;
