import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ShowCategoryService from '@modules/categories/services/ShowCategoryService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({ name });

    return response.json(category);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const showCategory = container.resolve(ShowCategoryService);

    const categories = await showCategory.execute();

    return response.json(categories);
  }
}
