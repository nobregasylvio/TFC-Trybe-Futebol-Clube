import { Request, Response } from 'express';
import MatchService from '../services/Match.service';
import httpStatusCode from '../utils/httpStatusCode';

export default class MatchController {
  constructor(private _service = new MatchService()) {}

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matches = await this._service.getMatches(inProgress as string);
    res.status(httpStatusCode.ok).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const newMatch = req.body;
    const match = await this._service.createMatch(newMatch);
    res.status(httpStatusCode.created).json(match);
  };

  public changeInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.changeInProgress(id);
    res.status(httpStatusCode.ok).json({ message: 'Finished' });
  };
}
