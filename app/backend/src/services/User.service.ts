import * as bcrypt from 'bcryptjs';
import JWTFunctions from '../auth/JWTFunctions';
import UserModel from '../database/models/User';
import { ILogin } from '../interfaces';
import HttpException from '../utils/http.exception';
import validateLogin from './validations/validationsInputValues';

export default class UserService {
  private _jwt: JWTFunctions;

  constructor(private _model = UserModel) {
    this._jwt = new JWTFunctions();
  }

  public login = async (login: ILogin) => {
    validateLogin(login);
    const user = await this._model.findOne({ where: { email: login.email } });
    if (!user) throw new HttpException(401, 'Incorrect email or password');

    const isCorrectPassword = await bcrypt.compare(login.password, user.password);
    if (!isCorrectPassword) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const token = this._jwt.createToken(user.dataValues);
    return token;
  };
}
