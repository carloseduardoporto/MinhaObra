import CreateConstructionService from '@modules/constructions/services/CreateConstructionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ConstructionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, metragem, valorDaObra, user_id, started_at } = request.body;

    const createConstruction = container.resolve(CreateConstructionService);

    const construction = await createConstruction.execute({
      name,
      metragem,
      valorDaObra,
      user_id,
      started_at,
    });

    return response.json(construction);
  }
}
