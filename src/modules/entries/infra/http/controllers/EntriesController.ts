import CreateEntrieService from '@modules/entries/services/CreateEntrieService';
import { Request, Response } from 'express'
import { container } from 'tsyringe';


export default class EntriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createEntrie = container.resolve(CreateEntrieService)

    const { quantity, construction_id, isPayed, description } = request.body;

    const entrie = await createEntrie.execute({
      quantity, construction_id, isPayed, description})

      return response.json(entrie);
  }
}

//quantity, construction_id, isPayed, description
