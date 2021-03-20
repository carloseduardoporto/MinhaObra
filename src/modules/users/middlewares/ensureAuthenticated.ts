import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import AuthConfig from '../../../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }
  // token = Bearer aisdiajs10djdj3819jasd, logo temos que dividir

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, AuthConfig.jwt.secret);

    // sei que o verify retorna algo como um objeto { iat, exp, sub (que é o id) } e na tipagem esta como string ou undefined
    // vamos forçar a tipagem
    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
