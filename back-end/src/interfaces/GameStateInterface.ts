import { Team } from "../domain/team/Team";

export interface IGameState {
    minute: number;
    events: string[];
    teamOne: Team;
    teamTwo: Team;
}