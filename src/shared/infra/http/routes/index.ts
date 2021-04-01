import constructionsRouter from '@modules/constructions/infra/http/routes/constructions.routes';
import entriesRouter from '@modules/entries/infra/http/routes/entries.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import { Router } from 'express';
import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import suppliersRouter from '@modules/supplier/infra/http/routes/suppliers.routes';
import stagesRouter from '@modules/stages/infra/http/routes/stages.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/constructions', ensureAuthenticated, constructionsRouter);
routes.use('/entries', entriesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/suppliers', suppliersRouter);
routes.use('/stages', stagesRouter);

export default routes;
