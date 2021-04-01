import Stage from '../infra/typeorm/entities/Stage';

export default interface IStagesRepository {
  create(name: string): Promise<Stage>;
  save(stage: Stage): Promise<Stage>;
  findByName(name: string): Promise<Stage | undefined>;
  listAllStages(): Promise<Stage[]>;
}
