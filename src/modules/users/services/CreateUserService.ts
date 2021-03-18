import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

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

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUsersExists = await this.usersRepository.findByEmail(email);

    if (checkUsersExists) {
      throw Error('Usuário já existe');
    }

    const hashedPassword = await this.hashProvider.hash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
