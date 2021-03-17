import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IConstructionsRepository from '@modules/constructions/repositories/IConstructionsRepository';
import ConstructionsRepository from '@modules/constructions/infra/typeorm/repositories/ConstructionsRepository';

import IEntriesRepository from '@modules/entries/repositories/IEntriesRepository';
import EntriesRepository from '@modules/entries/infra/typeorm/repositories/EntriesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IConstructionsRepository>(
  'ConstructionsRepository',
  ConstructionsRepository,
);

container.registerSingleton<IEntriesRepository>(
  'EntriesRepository',
  EntriesRepository,
);
