import { ITeamMatch } from '../interfaces';

export default class TeamStats {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = 100;

  constructor(team: ITeamMatch) {
    this.name = team.teamName;
    this.calculateStatistcsAway(team);
    this.calculateStatistcsHome(team);
  }

  public calculateStatistcsAway(team: ITeamMatch) {
    let win = 0;
    let losses = 0;
    let draw = 0;
    if (team.awayMatch) {
      team.awayMatch.forEach((teamAway) => {
        if (teamAway.awayTeamGoals === teamAway.homeTeamGoals) draw += 1;
        if (teamAway.awayTeamGoals > teamAway.homeTeamGoals) win += 1;
        if (teamAway.awayTeamGoals < teamAway.homeTeamGoals) losses += 1;
        this.setGoalsFavor = teamAway.awayTeamGoals;
        this.setGoalsOwn = teamAway.homeTeamGoals;
      });
      this.setTotalGames = team.awayMatch.length;
      this.setTotalDraws = draw;
      this.setTotalVictories = win;
      this.setTotalLosses = losses;
    }
  }

  public calculateStatistcsHome(team: ITeamMatch) {
    let win = 0;
    let losses = 0;
    let draw = 0;
    if (team.homeMatch) {
      team.homeMatch.forEach((teamHome) => {
        if (teamHome.homeTeamGoals === teamHome.awayTeamGoals) draw += 1;
        if (teamHome.homeTeamGoals > teamHome.awayTeamGoals) win += 1;
        if (teamHome.homeTeamGoals < teamHome.awayTeamGoals) losses += 1;
        this.setGoalsFavor = teamHome.homeTeamGoals;
        this.setGoalsOwn = teamHome.awayTeamGoals;
      });
      this.setTotalGames = team.homeMatch.length;
      this.setTotalDraws = draw;
      this.setTotalVictories = win;
      this.setTotalLosses = losses;
    }
  }

  protected setTotalPoints() {
    this.totalPoints = this.totalVictories * 3 + this.totalDraws;
  }

  protected set setTotalVictories(value: number) {
    this.totalVictories += value;
    this.setTotalPoints();
  }

  protected set setTotalLosses(value: number) {
    this.totalLosses += value;
  }

  protected set setTotalDraws(value: number) {
    this.totalDraws += value;
    this.setTotalPoints();
  }

  protected set setTotalGames(value: number) {
    this.totalGames += value;
  }

  protected set setGoalsFavor(value: number) {
    this.goalsFavor += value;
    this.setGoalsBalance();
  }

  protected set setGoalsOwn(value: number) {
    this.goalsOwn += value;
    this.setGoalsBalance();
  }

  protected setGoalsBalance() {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  protected setEfficiency() {
    this.efficiency = Math.round((this.totalPoints / (this.totalGames * 3)) * 10000) / 100;
  }
}
