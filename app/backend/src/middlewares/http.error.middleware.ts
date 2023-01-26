import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';

const httpErrorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, message } = err as HttpException;
  return res.status(statusCode).json({ message });
};

export default httpErrorMiddleware;
