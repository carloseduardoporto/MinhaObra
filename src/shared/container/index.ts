import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IConstructionsRepository from '@modules/constructions/repositories/IConstructionsRepository';
import ConstructionsRepository from '@modules/constructions/infra/typeorm/repositories/ConstructionsRepository';

import IEntriesRepository from '@modules/entries/repositories/IEntriesRepository';
import EntriesRepository from '@modules/entries/infra/typeorm/repositories/EntriesRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import StagesRepository from '@modules/stages/infra/typeorm/repositories/StagesRepository';
import IStagesRepository from '@modules/stages/repositories/IStageRepository';

import ISuppliersRepository from '@modules/supplier/repositories/ISuppliersRepository';
import SuppliersRepository from '@modules/supplier/infra/typeorm/repositories/SuppliersRepository';

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

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IStagesRepository>(
  'StagesRepository',
  StagesRepository,
);

container.registerSingleton<ISuppliersRepository>(
  'SuppliersRepository',
  SuppliersRepository,
);
