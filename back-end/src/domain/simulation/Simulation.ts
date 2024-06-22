import { IGameState } from "../../interfaces/GameStateInterface";
import { Player } from "../player/Player";
import { Team } from "../team/Team";
import { SimulationMethods } from "./SimulationMethods";
import { randomize } from "../../utils/randomizer";
import Constants from "../constants";

export class Simulation implements SimulationMethods {
    private gameState: IGameState;

    constructor(teams: [Team, Team]) {
        this.gameState = {
            minute: 0,
            events: [],
            teams,
            allPlayersInGame: [...teams[0].getPlayers(), ...teams[1].getPlayers()]
        };
    }

    public runSimulation() {
        const interval = setInterval(() => {
            this.gameState.minute++;

            this.updatePlayerFarm();
            this.simulateSoloLaneFight('top')
            this.simulateSoloLaneFight('mid')

            console.clear();
            this.displayGameState();

            if (this.gameState.minute === Constants.GAME_DURATION) {
                clearInterval(interval);
            }
        }, 1000);
    }
    

    private updatePlayerFarm() {
        this.gameState.allPlayersInGame.forEach(player => {
            const farmGained = player.incrementFarm();
            player.incrementGold(farmGained * Constants.FARM_INCREMENT);
        });
    }

    private simulateSoloLaneFight(lane: 'top' | 'mid') {
        const PlayerOne = this.gameState.teams[0].getPlayerByRole(lane);
        const PlayerTwo = this.gameState.teams[1].getPlayerByRole(lane);
        
        const hasFight = randomize(0, 100);

        if (hasFight >= 50) {
            const fightEvent = this.handleKillEvent(PlayerOne, PlayerTwo);
            this.gameState.events.push(fightEvent);
        }
    }

    private simulateBotLaneFight() {
        const botOne = [
            this.gameState.teams[0].getPlayerByRole('adc'),
            this.gameState.teams[0].getPlayerByRole('sup')
        ];
        const botTwo = [
            this.gameState.teams[1].getPlayerByRole('adc'),
            this.gameState.teams[1].getPlayerByRole('sup')
        ];

        const hasFight = randomize(0, 100);

        if (hasFight >= 50) {
            const fightEvent = this.handleBotKillEvent(botOne, botTwo);
            this.gameState.events.push(fightEvent);
        }
    }

    private handleBotKillEvent(botOne: Player[], botTwo: Player[]): string {
        const botOneRoll = randomize(0, 10);
        const botTwoRoll = randomize(0, 10);
        

        const botOneKillProbability = this.gameState.teams[0].calculateBotLaneKillProbability() + botOneRoll
        const botTwoKillProbability = this.gameState.teams[1].calculateBotLaneKillProbability() + botTwoRoll

        if (botOneKillProbability > botTwoKillProbability) {
            
        }



        return ''
    }
    
    

    private handleKillEvent(playerOne: Player, playerTwo: Player): string {
        const playerOneRoll = randomize(0, 10);
        const playerTwoRoll = randomize(0, 10);

        const playerOneKillProbability = playerOne.calculatePlayerAttack() + playerOneRoll - playerTwo.calculatePlayerDefense();
        const playerTwoKillProbability = playerTwo.calculatePlayerAttack() + playerTwoRoll - playerOne.calculatePlayerDefense();

        if (playerOneKillProbability > playerTwoKillProbability) {
            return this.recordKill(playerOne, playerTwo);
        } else if (playerOneKillProbability === playerTwoKillProbability) {
            const players = [playerOne, playerTwo];
            const playerWinner = players.splice(randomize(0, 1), 1)[0];
            const playerLoser = players[0];
            return this.recordKill(playerWinner, playerLoser);
        } else {
            return this.recordKill(playerTwo, playerOne);
        }
    }

    private recordKill(killer: Player, victim: Player): string {
        killer.incrementKills(1);
        killer.incrementGold(300);
        victim.incrementDeaths(1);

        return `Player ${killer.getName()} killed ${victim.getName()} in the ${killer.getRole()} lane`;
    }

    private recordAssit(player: Player, victim: Player): string {
        player.incrementAssits(1);
        player.incrementGold(300);

        return `Player ${player.getName()} pegou assistencia em cima do: ${victim.getName()}`;
    }

    private displayGameState() {
        const { teams, minute } = this.gameState;

        const teamOneTotalGold = Math.round(teams[0].getPlayers().reduce((total, player) => total + player.getGold(), 0));
        const teamTwoTotalGold = Math.round(teams[1].getPlayers().reduce((total, player) => total + player.getGold(), 0));

        const teamOneTotalKills = teams[0].getPlayers().reduce((total, player) => total + player.getKills(), 0);
        const teamTwoTotalKills = teams[1].getPlayers().reduce((total, player) => total + player.getKills(), 0);

        console.log("=".repeat(95));
        console.log(`${teams[0].getName()} vs ${teams[1].getName()}`);
        console.log(`Minute: ${minute}`);
        console.log("=".repeat(95));
        console.log(`Gold: ${teamOneTotalGold}   |   Kills: ${teamOneTotalKills}     |     ${teamTwoTotalKills}   |   Gold: ${teamTwoTotalGold}`);
        console.log("=".repeat(95));
        console.log("Player Details:");
        console.log("=".repeat(95));

        const teamOnePlayers = teams[0].getPlayers();
        const teamTwoPlayers = teams[1].getPlayers();

        for (let i = 0; i < teamOnePlayers.length; i++) {
            const playerOne = teamOnePlayers[i];
            const playerTwo = teamTwoPlayers[i];

            const playerOneGold = Math.round(playerOne.getGold());
            const playerTwoGold = Math.round(playerTwo.getGold());
            const playerOneStats = `${playerOne.getKills()}/${playerOne.getDeaths()}/${playerOne.getAssists()}`;
            const playerTwoStats = `${playerTwo.getKills()}/${playerTwo.getDeaths()}/${playerTwo.getAssists()}`;
            const goldDifference = playerOneGold - playerTwoGold;

            const goldDifferenceText = goldDifference > 0 ? `> ${Math.abs(goldDifference)}` : `< ${Math.abs(goldDifference)}`;

            console.log(`${playerOne.getName().padEnd(15)} Gold: ${playerOneGold.toString().padEnd(5)} CS: ${playerOne.getFarm().toString().padEnd(3)} ${playerOneStats.padEnd(9)} ${goldDifferenceText} ${playerTwoStats.padEnd(9)} Gold: ${playerTwoGold.toString().padEnd(5)} CS: ${playerTwo.getFarm().toString().padEnd(3)} ${playerTwo.getName().padEnd(15)}`);
        }
        console.log("=".repeat(95));
    }
}
