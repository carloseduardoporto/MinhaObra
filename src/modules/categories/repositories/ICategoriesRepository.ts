import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Category from '../infra/typeorm/entities/Category';

export default interface ICategoriesRepository {
  create({ name }: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
  findByName(name: string): Promise<Category | undefined>;
  listAllCategorys(): Promise<Category[]>;
}
