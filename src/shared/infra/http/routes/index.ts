import constructionsRouter from '@modules/constructions/infra/http/routes/constructions.routes';
import entriesRouter from '@modules/entries/infra/http/routes/entries.routes';
import { Router } from 'express';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/constructions', constructionsRouter);
routes.use('/entries', entriesRouter);

export default routes;
