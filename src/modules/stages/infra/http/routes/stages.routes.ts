import { Router } from 'express';
import StagesController from '../controllers/StagesController';

const stagesRouter = Router();
const stagesController = new StagesController();

stagesRouter.post('/', stagesController.create);

export default stagesRouter;
