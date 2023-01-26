import { Secret, sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

export default class JWTFunctions {
  private secret: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    this.secret = process.env.TOKEN_SECRET || 'mySecret' as Secret;

    this.jwtConfig = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };
  }

  public createToken = (user: IUser) => {
    const { password: _, ...userWithoutPassword } = user;
    return sign({ data: userWithoutPassword }, this.secret as string, this.jwtConfig);
  };
}
