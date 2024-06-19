import { IGameState } from "../../interfaces/GameStateInterface"
import { Player } from "../player/Player"
import { Team } from "../team/Team"
import { SimulationMethods } from "./SimulationMethods"

export class Simulation implements SimulationMethods {
    private readonly GAME_DURATION = 15;
    private readonly FARM_INCREMENT = 19.8;
    private readonly CSPM_MULTIPLIER = 1;

    private readonly KDA_WEIGHT = 0.3;
    private readonly DPM_WEIGHT = 0.3;
    private readonly FB_WEIGHT = 0.2;
    private readonly KS_WEIGHT = 0.2;

    private readonly DTH_WEIGHT = 0.3;
    private readonly GD10_WEIGHT = 0.2;
    private readonly XPD10_WEIGHT = 0.2;
    private readonly CSD10_WEIGHT = 0.3;

    public simulateGame(teamOne: Team, teamTwo: Team) {
        const gameState: IGameState = {
            minute: 0,
            events: [],
            teamOne: teamOne,
            teamTwo: teamTwo
        }

        const interval = setInterval(() => {
            gameState.minute++
            const allPlayersInGame = [...teamOne.getPlayers(), ...teamTwo.getPlayers()]

            this.simulatePlayersFarm(allPlayersInGame)
            this.simulateTop(gameState)

            console.log('Tempo da partida: ', gameState.minute, 'minutos')
            if (gameState.minute === this.GAME_DURATION) {
                clearInterval(interval);
            }
        }, 1000)
    }

    private simulatePlayersFarm(allPlayersInGame: Player[]) {
        allPlayersInGame.forEach(player => {
            player.incrementFarm(Math.round(player.getCspm() * this.CSPM_MULTIPLIER))
            player.incrementGold(this.FARM_INCREMENT)
        })
    }

    private simulateTop(gameState: IGameState) {
        const topPlayerOne = gameState.teamOne.getPlayerByRole('top');
        const topPlayerTwo = gameState.teamTwo.getPlayerByRole('top');

        const simulateKillEvents = this.simulateKill(topPlayerOne, topPlayerTwo)
        gameState.events.push(simulateKillEvents)
    }

    public simulateKill(playerOne: Player, playerTwo: Player): string {
        const playerOneAttack = this.calculatePlayerAttack(playerOne);
        const playerOneDefense = this.calculatePlayerDefense(playerOne);

        const playerTwoAttack = this.calculatePlayerAttack(playerTwo);
        const playerTwoDefense = this.calculatePlayerDefense(playerTwo);

        const playerOneRoll = Math.floor(Math.random() * 11);
        const playerTwoRoll = Math.floor(Math.random() * 11);

        const playerOneKillProbability = playerOneAttack + playerOneRoll - playerTwoDefense;
        const playerTwoKillProbability = playerTwoAttack + playerTwoRoll - playerOneDefense;

        if (playerOneKillProbability > playerTwoKillProbability) {
            playerOne.incrementKills(1);
            playerTwo.incrementDeaths(1);
            return `O jogador ${playerOne.getName()} abateu o ${playerTwo.getName()} na ${playerOne.getRole()} lane`;
        } else {
            playerTwo.incrementKills(1);
            playerOne.incrementDeaths(1);
            return `O jogador ${playerTwo.getName()} abateu o ${playerOne.getName()} na ${playerTwo.getRole()} lane`;
        }
    }

    public calculatePlayerAttack(player: Player): number {
        const kda = player.getKda();
        const dpm = player.getDpm();
        const fb = player.getFb();
        const ks = player.getKs();

        const attack = (kda * this.KDA_WEIGHT) + (dpm * this.DPM_WEIGHT) + (fb * this.FB_WEIGHT) + (ks * this.KS_WEIGHT);

        return attack;
    }

    public calculatePlayerDefense(player: Player): number {
        const dth = player.getDth();
        const gd10 = player.getGd10();
        const xpd10 = player.getXpd10();
        const csd10 = player.getCsd10();

        const defense = (dth * this.DTH_WEIGHT) + (gd10 * this.GD10_WEIGHT) + (xpd10 * this.XPD10_WEIGHT) + (csd10 * this.CSD10_WEIGHT);

        return defense;
    }
}
