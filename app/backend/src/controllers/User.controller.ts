import { Request, RequestHandler, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  constructor(private _service = new UserService()) { }

  public login = async (req: Request, res: Response) => {
    const login = req.body;
    const token = await this._service.login(login);
    res.status(200).json({ token });
  };

  public validate: RequestHandler = (req: Request, res: Response) => {
    const { data: { role } } = req.body.user;
    res.status(200).json({ role });
  };
}
