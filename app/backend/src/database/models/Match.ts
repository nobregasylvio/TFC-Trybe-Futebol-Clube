import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './Team';

class Match extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'match',
  tableName: 'matches',
  underscored: true,
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'homeTeamId', as: 'matches' });
Team.hasMany(Match, { foreignKey: 'awayTeamId', as: 'matches' });
Match.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'team' });
Match.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'team' });

export default Match;
