import "reflect-metadata";
import '../typeorm';
import '@shared/infra/typeorm';
import '@shared/container';

import cors from 'cors';
import express from 'express';
import routes from './routes';


const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.log('🚀 Server started on port 3334');
});
