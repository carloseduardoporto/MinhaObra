import { Router } from 'express';
import  EntriesController from '../controllers/EntriesController';


const entriesRouter = Router();
const entriesController = new EntriesController();

entriesRouter.post('/', entriesController.create);

export default entriesRouter;
