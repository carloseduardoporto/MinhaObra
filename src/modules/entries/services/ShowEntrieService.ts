import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { inject, injectable } from 'tsyringe';
import Entrie from '../infra/typeorm/entities/Entrie';
import IEntriesRepository from '../repositories/IEntriesRepository';

@injectable()
class ShowEntrieService {
  constructor(
    @inject('ConstructionsRepository')
    private entriesRepository: IEntriesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(construction_id: string): Promise<Entrie[]> {
    let entries = await this.cacheProvider.recover<Entrie[]>(
      `construction_entries-list:${construction_id}`,
    );

    if (!entries) {
      entries = await this.entriesRepository.listAllConstructionEntries(
        construction_id,
      );

      await this.cacheProvider.save(
        `construction_entries-list:${construction_id}`,
        entries,
      );
    }

    return entries;
  }
}

export default ShowEntrieService;
