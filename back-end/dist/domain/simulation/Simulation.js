"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulation = void 0;
class Simulation {
    simulateGame(teamOne, teamTwo) {
        const GAME_DURATION = 30;
        const gameState = {
            minute: 0,
            events: [],
            teamOne: teamOne,
            teamTwo: teamTwo
        };
        const interval = setInterval(() => {
            gameState.minute++;
            gameState.teamOne.getPlayers().forEach(player => { this.simulateFarm(player); });
            gameState.teamTwo.getPlayers().forEach(player => { this.simulateFarm(player); });
            console.log(gameState.teamOne, '<<');
            if (gameState.minute === GAME_DURATION) {
                clearInterval(interval);
            }
        }, 1000);
    }
    simulateKill(playerOne, playerTwo) {
        const playerOneKillProbability = playerOne.getKda() + Math.random();
        const playerTwoKillProbability = playerTwo.getKda() + Math.random();
        if (playerOneKillProbability > playerTwoKillProbability) {
            playerOne.incrementKills(1);
            playerTwo.incrementDeaths(1);
        }
        else {
            playerTwo.incrementKills(1);
            playerOne.incrementDeaths(1);
        }
    }
    simulateFarm(player) {
        player.incrementFarm(Math.round(player.getCspm()));
    }
}
exports.Simulation = Simulation;
