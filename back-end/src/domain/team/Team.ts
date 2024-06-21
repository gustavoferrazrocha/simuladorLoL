import { Player } from "../player/Player";
import { TeamDto } from "./TeamDto";

export class Team {
    private name: string;
    private players: Player[];
    private gold: number;
    private kills: number;
    private dragonsQuantity: number;
    private towersQuantity: number;
    private hasDragonSoul: boolean;
    private hasNashorBuff: boolean;
    private hasElderDragon: boolean;
    
    constructor(data: TeamDto) {
        this.players = data.players
        this.gold = data.gold
        this.name = data.name
        this.kills = data.kills
        this.dragonsQuantity = data.dragonsQuantity
        this.towersQuantity = data.towersQuantity
        this.hasDragonSoul = data.hasDragonSoul
        this.hasNashorBuff = data.hasNashorBuff
        this.hasElderDragon = data.hasElderDragon
    }
    
    public getPlayers(): Player[] {
        return this.players
    }

    public getName(): string {
        return this.name;
    }


    public getPlayerByRole(role: string): Player {
        const player = this.players.find(player => player.getRole() === role);

        if (!player) {
            throw new Error(`Jogador com a role: '${role}' não foi encontrado no time.`);
        }

        return player
    }
    
}