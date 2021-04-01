import { inject, injectable } from 'tsyringe';
import Stage from '../infra/typeorm/entities/Stage';
import IStagesRepository from '../repositories/IStageRepository';

@injectable()
class CreateStageService {
  constructor(
    @inject('StagesRepository')
    private stagesRepository: IStagesRepository,
  ) {}

  public async execute(name: string): Promise<Stage> {
    const stage = await this.stagesRepository.create(name);

    return stage;
  }
}

export default CreateStageService;
