export interface ILogin {
  email: string,
  password: string,
}

export interface IUser {
  id?: number,
  username: string,
  role: string,
  email: string,
  password?: string
}

export interface ITeam {
  id: number,
  teamName: string,
}

export interface IMatchGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IMatch extends IMatchGoals {
  homeTeamId: number,
  awayTeamId: number,
}

export interface ITeamMatch extends ITeam {
  homeMatch?: [{
    id: number,
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
    inProgress: boolean,
  }],
  awayMatch?: [{
    id: number,
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
    inProgress: boolean,
  }],
}
