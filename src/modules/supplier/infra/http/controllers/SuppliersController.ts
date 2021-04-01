import CreateSupplierService from '@modules/supplier/services/CreateSupplierService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

export default class SuppliersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone } = request.body;

    const createSupplier = container.resolve(CreateSupplierService);

    const supplier = await createSupplier.execute({ name, phone });

    return response.json(supplier);
  }

  // public async index(request: Request, response: Response): Promise<Response> {
  //   const showCategory = container.resolve(ShowCategoryService);

  //   const categories = await showCategory.execute();

  //   return response.json(categories);
  // }
}
