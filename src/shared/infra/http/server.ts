import 'reflect-metadata';
import '../typeorm';
import '@shared/container';

import cors from 'cors';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3334, () => {
  console.log('🚀 Server started on port 3334');
});
