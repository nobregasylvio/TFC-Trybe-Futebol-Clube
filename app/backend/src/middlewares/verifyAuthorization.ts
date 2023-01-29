import { RequestHandler } from 'express';
import JWTFunctions from '../auth/JWTFunctions';
import HttpException from '../utils/http.exception';

const jwt = new JWTFunctions();

const verifyAuthorization: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: 'Token not found' });
  }

  try {
    const data = jwt.verifyToken(authorization);
    req.body.user = data;
    next();
  } catch (e) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

export default verifyAuthorization;
