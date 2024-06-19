import { Player } from "../player/Player"
import { Team } from "../team/Team"

export interface SimulationMethods {
    simulateKill(playerOne: Player, playerTwo: Player): void
    simulateFarm(player: Player): void
    simulateGame(teamOne: Team, teamTwo: Team): any
}