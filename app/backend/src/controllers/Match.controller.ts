import { Request, Response } from 'express';
import MatchService from '../services/Match.service';
import httpStatusCode from '../utils/httpStatusCode';

export default class MatchController {
  constructor(private _service = new MatchService()) {};

  public findAll = async (req: Request, res: Response) => {
    const matches = await this._service.findAll();
    res.status(httpStatusCode.ok).json(matches);
  };
}
