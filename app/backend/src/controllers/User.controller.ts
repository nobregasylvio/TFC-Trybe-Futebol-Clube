import { Request, Response } from 'express';
import UserService from '../services/User.service';
import httpStatusCode from '../utils/httpStatusCode';

export default class UserController {
  constructor(private service = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    const login = req.body;
    const token = await this.service.login(login);
    res.status(httpStatusCode.ok).json({ token });
  };
}
