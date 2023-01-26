import { Secret, sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

export default class JWTFunctions {
  private _secret: Secret;

  private _jwtConfig: SignOptions;

  constructor() {
    this._secret = process.env.TOKEN_SECRET || 'mySecret' as Secret;

    this._jwtConfig = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };
  }

  public createToken = (user: IUser) => {
    const { password: _, ...userWithoutPassword } = user;
    return sign({ data: userWithoutPassword }, this._secret as string, this._jwtConfig);
  };
}
