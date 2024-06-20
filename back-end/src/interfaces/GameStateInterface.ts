import { Team } from "../domain/team/Team";
import {Player} from "../domain/player";

export interface IGameState {
    minute: number;
    events: string[];
    teams: [Team, Team];
    allPlayersInGame: Player[]
}
