import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  public async execute({name, email, password }: IRequest): Promise<User> {
    const checkUsersExists = await this.usersRepository.findByEmail(email);

    if (checkUsersExists) {
      throw Error('Usuário já existe');
    }

    const user = await this.usersRepository.create({ name, email, password});

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
