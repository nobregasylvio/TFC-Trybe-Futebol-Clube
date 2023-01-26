import { RequestHandler } from 'express';
import JWTFunctions from '../auth/JWTFunctions';

const jwt = new JWTFunctions();

const verifyAuthorization: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ message: 'Token not found' });
  }

  const data = jwt.verifyToken(authorization);

  req.body = data;
  next();
};

export default verifyAuthorization;
