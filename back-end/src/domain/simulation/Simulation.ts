import { IGameState } from "../../interfaces/GameStateInterface"
import { Player } from "../player/Player"
import { Team } from "../team/Team"
import { SimulationMethods } from "./SimulationMethods"
import {randomize} from "../../utils/randomizer";
import Constants from '../constants'

export class Simulation implements SimulationMethods {
    private GameState : IGameState;


    constructor(teams: [Team, Team]) {
        this.GameState = {
            minute: 0,
            events: [],
            teams,
            allPlayersInGame: [...teams[0].getPlayers(), ...teams[1].getPlayers()]
        }
    }

    public simulateGame() {
        const interval = setInterval(() => {
            this.GameState.minute++;

            this.simulatePlayersFarm();
            this.simulateTop();

            console.clear();
            this.logGameState();

            if (this.GameState.minute === Constants.GAME_DURATION) {
                clearInterval(interval);
            }
        }, 1000);
    }

    private simulatePlayersFarm() {
        this.GameState.allPlayersInGame.forEach(player => {
            player.incrementFarm();
            player.incrementGold(Constants.FARM_INCREMENT);
        });
    }

    private simulateTop() {
        const topPlayerOne = this.GameState.teams[0].getPlayerByRole('top');
        const topPlayerTwo = this.GameState.teams[1].getPlayerByRole('top');

        const simulateKillEvents = this.simulateKill(topPlayerOne, topPlayerTwo);
        this.GameState.events.push(simulateKillEvents);
    }

    public simulateKill(playerOne: Player, playerTwo: Player): string {
        const playerOneRoll = randomize(0, 10)
        const playerTwoRoll = randomize(0, 10)

        const playerOneKillProbability = playerOne.calculatePlayerAttack() + playerOneRoll - playerTwo.calculatePlayerDefense();
        const playerTwoKillProbability = playerTwo.calculatePlayerAttack() + playerTwoRoll - playerOne.calculatePlayerDefense();

        if (playerOneKillProbability > playerTwoKillProbability) return this.kill(playerOne, playerTwo)
        else if (playerOneKillProbability === playerTwoKillProbability) {
            const players = [playerOne, playerTwo]
            const playerWinner = players.splice(randomize(0, 1), 1)[0]
            const playerLoser = players[0]
            return this.kill(playerWinner, playerLoser)
        }
        else return this.kill(playerTwo, playerOne)
    }

    //TODO: Esse nome é ruim, troca depois
    public kill(playerWinner: Player, playerLoser: Player) {
        playerWinner.incrementKills(1);
        playerWinner.incrementGold(300)
        playerLoser.incrementDeaths(1);

        return `O jogador ${playerWinner.getName()} abateu o ${playerLoser.getName()} na ${playerWinner.getRole()} lane`;
    }

    private logGameState() {
        const { teams, minute } = this.GameState;

        const teamOneGold = teams[0].getPlayers().reduce((total, player) => total + player.getGold(), 0);
        const teamTwoGold = teams[1].getPlayers().reduce((total, player) => total + player.getGold(), 0);

        const teamOneKills = teams[0].getPlayers().reduce((total, player) => total + player.getKills(), 0);
        const teamTwoKills = teams[1].getPlayers().reduce((total, player) => total + player.getKills(), 0);

        console.log(`${teams[0].getName()}             ${teams[1].getName()}`);
        console.log(`${teamOneGold}                  (${teamOneKills}         ${teamTwoKills})                ${teamTwoGold}`);
        console.log(`                         ${minute}:00                         `);

        const teamOnePlayers = teams[0].getPlayers();
        const teamTwoPlayers = teams[1].getPlayers();

        for (let i = 0; i < teamOnePlayers.length; i++) {
            const playerOne = teamOnePlayers[i];
            const playerTwo = teamTwoPlayers[i];

            const playerOneGold = playerOne.getGold();
            const playerTwoGold = playerTwo.getGold();
            const playerOneStats = `${playerOne.getKills()}/${playerOne.getDeaths()}/${playerOne.getAssists()}`;
            const playerTwoStats = `${playerTwo.getKills()}/${playerTwo.getDeaths()}/${playerTwo.getAssists()}`;
            const difference = playerOneGold - playerTwoGold;

            const differenceText = difference > 0 ? ` >   ${Math.abs(difference)}` : ` <   ${Math.abs(difference)}`;

            console.log(`${playerOne.getName()}   Gold: ${playerOneGold} CS: ${playerOne.getFarm()}   ${playerOneStats} ${differenceText}   ${playerTwoStats}   Gold: ${playerTwoGold} CS: ${playerTwo.getFarm()}   ${playerTwo.getName()}`);
        }
    }
}
