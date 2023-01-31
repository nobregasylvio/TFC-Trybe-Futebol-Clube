import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard.service';

export default class LeaderboardController {
  constructor(private _service = new LeaderboardService()) {}

  public getAll = async (req: Request, res: Response) => {
    const result = await this._service.getAllLeaderBoard();
    res.status(200).json(result);
  };

  public getHome = async (req: Request, res: Response) => {
    const result = await this._service.getHomeLeaderboard();
    res.status(200).json(result);
  };

  public getAway = async (req: Request, res: Response) => {
    const result = await this._service.getAwayLeaderBoard();
    res.status(200).json(result);
  };
}
