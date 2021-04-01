import CreateConstructionService from '@modules/constructions/services/CreateConstructionService';
import ShowConstructionService from '@modules/constructions/services/ShowConstructionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ConstructionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, metragem, valorDaObra, started_at } = request.body;

    const createConstruction = container.resolve(CreateConstructionService);

    const construction = await createConstruction.execute({
      name,
      metragem,
      valorDaObra,
      user_id: request.user.id,
      started_at,
    });

    return response.json(construction);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const showConstruction = container.resolve(ShowConstructionService);

    const constructions = await showConstruction.execute(request.user.id);

    return response.json(constructions);
  }
}
