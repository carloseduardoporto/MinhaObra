export default interface IHashProvider {
  hash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
