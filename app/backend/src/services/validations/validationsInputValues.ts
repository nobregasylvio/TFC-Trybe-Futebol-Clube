import { ILogin } from '../../interfaces';
import HttpException from '../../utils/http.exception';
import loginSchema from './schemas';

const validateLogin = ({ email, password }: ILogin) => {
  const { error } = loginSchema.validate({ email, password });
  if (!error) return null;
  throw new HttpException(400, 'All fields must be filled');
};

export default validateLogin;
