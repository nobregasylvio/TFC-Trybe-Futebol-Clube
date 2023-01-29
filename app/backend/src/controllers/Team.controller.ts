import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private _service = new TeamService()) { }

  public findAll = async (req: Request, res: Response) => {
    const teams = await this._service.findAll();

    res.status(200).json(teams);
  };

  public findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this._service.findById(id);
    res.status(200).json(team);
  };
}
