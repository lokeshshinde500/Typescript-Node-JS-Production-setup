// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError } from './ApiError';

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    err instanceof ApiError
      ? err.statusCode
      : res.statusCode !== 200
      ? res.statusCode
      : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
