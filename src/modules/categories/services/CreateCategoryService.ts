import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ name }: ICreateCategoryDTO): Promise<Category> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (!categoryExists) {
      throw new AppError('This category already exists', 400);
    }

    const category = await this.categoriesRepository.create({ name });

    return category;
  }
}
