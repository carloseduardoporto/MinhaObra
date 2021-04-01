import CreateStageService from '@modules/stages/services/CreateStageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class StagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createStage = container.resolve(CreateStageService);

    const stage = await createStage.execute(name);

    return response.json(stage);
  }

  // public async index(request: Request, response: Response): Promise<Response> {

  // }
}
