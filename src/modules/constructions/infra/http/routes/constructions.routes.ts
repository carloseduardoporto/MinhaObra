import { Router } from 'express';
import ConstructionsController from '../controllers/ConstructionsController';

const constructionsRouter = Router();
const constructionController = new ConstructionsController();

constructionsRouter.post('/', constructionController.create);

export default constructionsRouter;
