import { Player } from "../player";

export interface TeamDto {
    name: string;
    players: Player[];
    gold: number;
    kills: number;
    dragonsQuantity: number;
    towersQuantity: number;
    isDragonSoul: boolean;
    isNashorBuff: boolean;
    isElderDragon: boolean;
}
