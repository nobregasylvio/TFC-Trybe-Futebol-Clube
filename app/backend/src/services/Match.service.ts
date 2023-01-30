import HttpException from '../utils/http.exception';
import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';
import { IMatch, IMatchGoals } from '../interfaces';
import TeamService from './Team.service';

export default class MatchService {
  constructor(
    private _model = MatchModel,
    private _team = TeamModel,
    private _teamService = new TeamService(),
  ) { }

  public getMatches = async (inProgress: string) => {
    const matches = await this._model.findAll({
      include: [
        { model: this._team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this._team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    if (inProgress === 'true') return matches.filter((match) => match.inProgress === true);
    if (inProgress === 'false') return matches.filter((match) => match.inProgress === false);

    return matches;
  };

  public createMatch = async ({ awayTeamGoals, awayTeamId, homeTeamGoals, homeTeamId }: IMatch) => {
    const isValid = awayTeamId !== homeTeamId;
    if (!isValid) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }

    await this._teamService.findById(homeTeamId);
    await this._teamService.findById(awayTeamId);

    const newMatch = await this._model.create({
      awayTeamGoals,
      awayTeamId,
      homeTeamGoals,
      homeTeamId,
      inProgress: true,
    });

    return newMatch;
  };

  public changeInProgress = async (id: string) => {
    const result = await this._model.update({ inProgress: false }, { where: { id } });
    return result;
  };

  public updateGoals = async (id: string, resultMatch: IMatchGoals) => {
    const { homeTeamGoals, awayTeamGoals } = resultMatch;
    this._model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  };
}
