import FakeConstructionsRepository from '../repositories/fakes/FakeConstructionsRepository';
import CreateConstructionService from './CreateConstructionService';

describe('CreateConstruction', () => {
  it('should be able to create a new construction', async () => {
    const fakeConstructionsRepository = new FakeConstructionsRepository();
    const createConstructionService = new CreateConstructionService(
      fakeConstructionsRepository,
    );

    const construction = await createConstructionService.execute({
      name: 'Maritmo',
      metragem: 1345,
      user_id: 'id',
      valorDaObra: 121,
      started_at: new Date(),
    });

    expect(construction).toHaveProperty('id');
  });
});
