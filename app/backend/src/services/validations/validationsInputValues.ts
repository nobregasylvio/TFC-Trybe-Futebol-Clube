import { ILogin } from '../../interfaces';
import HttpException from '../../utils/http.exception';
import loginSchema from './schemas';
import httpStatusCode from '../../utils/httpStatusCode';

const validateLogin = ({ email, password }: ILogin) => {
  const { error } = loginSchema.validate({ email, password });
  if (!error) return null;
  throw new HttpException(httpStatusCode.badRequest, 'All fields must be filled');
};

export default validateLogin;
