import JWTFunctions from '../auth/JWTFunctions';
import UserModel from '../database/models/User';
import { ILogin } from '../interfaces';

export default class UserService {
  private _jwt: JWTFunctions;

  constructor(private _model = UserModel) {
    this._jwt = new JWTFunctions();
  }

  public login = async ({ email }: ILogin) => {
    const user = await this._model.findOne({ where: { email } });

    if (!user) return null; // will be completed soon

    const token = this._jwt.createToken(user.dataValues);
    return token;
  };
}
