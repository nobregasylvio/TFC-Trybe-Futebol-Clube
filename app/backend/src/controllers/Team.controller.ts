import { Request, Response } from 'express';
import TeamService from '../services/Team.service';
import httpStatusCode from '../utils/httpStatusCode';

export default class TeamController {
  constructor(private _service = new TeamService()) { }

  public findAll = async (req: Request, res: Response) => {
    const teams = await this._service.findAll();

    res.status(httpStatusCode.ok).json(teams);
  };
}
