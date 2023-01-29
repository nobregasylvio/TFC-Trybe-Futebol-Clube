import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

export default class MatchController {
  constructor(private _service = new MatchService()) {}

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matches = await this._service.getMatches(inProgress as string);
    res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const newMatch = req.body;
    const match = await this._service.createMatch(newMatch);
    res.status(201).json(match);
  };

  public changeInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.changeInProgress(id);
    res.status(200).json({ message: 'Finished' });
  };
}
