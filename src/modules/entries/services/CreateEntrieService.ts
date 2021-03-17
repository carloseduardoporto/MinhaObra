import ICreateEntriesDTO from '@modules/entries/dtos/ICreateEntriesDTO';
import { inject, injectable } from 'tsyringe';
import Entrie from '../infra/typeorm/entities/Entrie';
import IEntriesRepository from '../repositories/IEntriesRepository';

@injectable()
class CreateEntrieService {
  constructor(
    @inject('EntriesRepository')
    private entriesRepository: IEntriesRepository,
  ) {}

  public async execute({
    quantity,
    construction_id,
    isPayed,
    description,
  }: ICreateEntriesDTO): Promise<Entrie> {
    const entrie = await this.entriesRepository.create({
      quantity,
      construction_id,
      isPayed,
      description,
    });

    await this.entriesRepository.save(entrie);

    return entrie;
  }
}

export default CreateEntrieService;
