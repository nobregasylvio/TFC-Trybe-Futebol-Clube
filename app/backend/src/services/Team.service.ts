import TeamModel from '../database/models/Team';
import { ITeam } from '../interfaces';

export default class TeamService {
  constructor(private _model = TeamModel) { }

  public async findAll(): Promise<ITeam[]> {
    const teams = await this._model.findAll();
    return teams;
  }
}
