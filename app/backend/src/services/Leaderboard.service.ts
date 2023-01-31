import { ITeam } from '../interfaces';
import TeamModel from '../database/models/Team';
import MatchModel from '../database/models/Match';
import TeamStats from '../utils/TeamStats';

export default class LeaderboardService {
  constructor(
    private _teamModel = TeamModel,
    private _matchModel = MatchModel,
  ) { }

  public generateLeaderboard = async (teams: ITeam[]) => teams.map((team) => new TeamStats(team))
    .sort((a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn - a.goalsOwn);

  public getHomeLeaderboard = async () => {
    const teams = await this._teamModel.findAll({
      include: [
        { model: this._matchModel,
          as: 'homeMatch',
          where: { inProgress: false },
          attributes: { exclude: ['id'] } },
      ],
    });

    return this.generateLeaderboard(teams);
  };

  public getAwayLeaderBoard = async () => {
    const teams = await this._teamModel.findAll({
      include: [
        { model: this._matchModel,
          as: 'awayMatch',
          where: { inProgress: false },
          attributes: { exclude: ['id'] } },
      ],
    });

    return this.generateLeaderboard(teams);
  };

  public getAllLeaderBoard = async () => {
    const teams = await this._teamModel.findAll({
      include: [
        { model: this._matchModel,
          as: 'awayMatch',
          where: { inProgress: false },
          attributes: { exclude: ['id'] } },
        { model: this._matchModel,
          as: 'homeMatch',
          where: { inProgress: false },
          attributes: { exclude: ['id'] } },
      ],
    });

    return this.generateLeaderboard(teams);
  };
}
