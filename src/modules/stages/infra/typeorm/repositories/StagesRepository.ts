import IStagesRepository from '@modules/stages/repositories/IStageRepository';
import { getRepository, Repository } from 'typeorm';
import Stage from '../entities/Stage';

class StagesRepository implements IStagesRepository {
  private stagesRepository: Repository<Stage>;

  constructor() {
    this.stagesRepository = getRepository(Stage);
  }

  public async create(name: string): Promise<Stage> {
    const stage = this.stagesRepository.create({ name });

    await this.stagesRepository.save(stage);

    return stage;
  }

  public async save(stage: Stage): Promise<Stage> {
    return this.stagesRepository.save(stage);
  }

  public async findByName(name: string): Promise<Stage | undefined> {
    return this.stagesRepository.findOne({ where: { name } });
  }

  public async listAllStages(): Promise<Stage[]> {
    return this.stagesRepository.find({ order: { name: 'ASC' } });
  }
}

export default StagesRepository;
