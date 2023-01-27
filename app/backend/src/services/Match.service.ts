import MatchModel from '../database/models/Match';
import TeamModel from '../database/models/Team';
import TeamService from './Team.service';

export default class MatchService {
  constructor(
    private _model = MatchModel,
    private _team = TeamModel,
  ) { }

  public async findAll() {
    const matches = this._model.findAll({
      include: [
        { model: this._team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: this._team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }
}
