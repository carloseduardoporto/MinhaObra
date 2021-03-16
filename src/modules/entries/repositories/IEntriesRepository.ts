import Entrie from "../infra/typeorm/entities/Entrie";
import ICreateEntriesDTO from '../dtos/ICreateEntriesDTO';

export default interface IUsersRepository{
  create(data: ICreateEntriesDTO): Promise<Entrie>
  save(entrie: Entrie): Promise<Entrie>
}
