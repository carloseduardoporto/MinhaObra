import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import { Request, Response } from 'express'
import { container } from 'tsyringe';


export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService)

    const { name, email, password } = request.body;

    const user = await createUser.execute({
      name, email, password})

      return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const showUsers = container.resolve(ShowUserService)

    const members = await showUsers.execute();

    return response.json(members);
  }
}
