import { Player } from "../player/Player";
import { TeamDto } from "./TeamDto";

export class Team {
    private players: Player[];
    private gold: number;
    private dragonsQuantity: number;
    private towersQuantity: number;
    private isDragonSoul: boolean;
    private isNashorBuff: boolean;
    private isElderDragon: boolean;

    constructor(data: TeamDto) {
        this.players = data.players
        this.gold = data.gold
        this.dragonsQuantity = data.dragonsQuantity
        this.towersQuantity = data.towersQuantity
        this.isDragonSoul = data.isDragonSoul
        this.isNashorBuff = data.isNashorBuff
        this.isElderDragon = data.isElderDragon
    }

    public getPlayers(): Player[] {
        return this.players
    }

    public getPlayerByRole(role: string): Player {
        const player = this.players.find(player => player.getRole() === role);

        if (!player) {
            throw new Error(`Jogador com a role: '${role}' não foi encontrado no time.`);
        }

        return player
    }
    
}