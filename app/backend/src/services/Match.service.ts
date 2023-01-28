import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';

export default class MatchService {
  constructor(
    private _model = MatchModel,
    private _team = TeamModel,
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
}
