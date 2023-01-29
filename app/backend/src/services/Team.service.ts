import TeamModel from '../database/models/Team';
import { ITeam } from '../interfaces';
import HttpException from '../utils/http.exception';

export default class TeamService {
  constructor(private _model = TeamModel) { }

  public async findAll(): Promise<ITeam[]> {
    const teams = await this._model.findAll();
    return teams;
  }

  public async findById(id: string | number): Promise<ITeam> {
    const team = await this._model.findByPk(id);
    if (!team) throw new HttpException(404, 'There is no team with such id!');
    return team;
  }
}
