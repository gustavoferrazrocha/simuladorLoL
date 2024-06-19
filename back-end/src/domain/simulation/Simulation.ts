import { IGameState } from "../../interfaces/GameStateInterface"
import { Player } from "../player/Player"
import { Team } from "../team/Team"
import { SimulationMethods } from "./SimulationMethods"

export class Simulation implements SimulationMethods {
    public simulateGame(teamOne: Team, teamTwo: Team) {
        const GAME_DURATION = 30
        const gameState: IGameState = {
            minute: 0,
            events: [],
            teamOne: teamOne,
            teamTwo: teamTwo
        }

        const interval = setInterval(() => {
            gameState.minute++

            gameState.teamOne.getPlayers().forEach(player => {this.simulateFarm(player)})
            gameState.teamTwo.getPlayers().forEach(player => {this.simulateFarm(player)})

            console.log(gameState.teamOne, '<<')
            if (gameState.minute === GAME_DURATION) {
                clearInterval(interval);
            }
        }, 1000)
    }

    public simulateKill(playerOne: Player, playerTwo: Player): void {
        const playerOneKillProbability = playerOne.getKda() + Math.random()
        const playerTwoKillProbability = playerTwo.getKda() + Math.random()

        if (playerOneKillProbability > playerTwoKillProbability) {
            playerOne.incrementKills(1)
            playerTwo.incrementDeaths(1)
        } else {
            playerTwo.incrementKills(1)
            playerOne.incrementDeaths(1)
        }
    }

    public simulateFarm(player: Player): void {
        player.incrementFarm(Math.round(player.getCspm()))
    }

    // function simulateGame(teamOne, teamTwo) {
    //     const gameState = {
    //       minute: 0,
    //       events: [],
    //       teamOne: JSON.parse(JSON.stringify(teamOne)), // Deep copy to avoid mutation
    //       teamTwo: JSON.parse(JSON.stringify(teamTwo))
    //     };
    //     const teamOneTopLane = gameState.teamOne.players.find(player => player.role === 'top');
    //     const teamTwoTopLane = gameState.teamTwo.players.find(player => player.role === 'top');
      
    //     const interval = setInterval(() => {
    //       gameState.minute++;
      
        //   gameState.teamOne.players.forEach(player => {
        //     simulateFarm(player);
        //   });
      
    //       gameState.teamTwo.players.forEach(player => {
    //         simulateFarm(player);
    //       });
      
    //       simulateTopLane(teamOneTopLane, teamTwoTopLane);
      
        //   if (gameState.minute === GAME_DURATION) {
        //     clearInterval(interval);
        //   }
    //     }, INTERVAL_MS);
      
    //     return gameState;
    //   }
}