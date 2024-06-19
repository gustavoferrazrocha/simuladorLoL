import { Player } from "../player/Player";

export interface TeamDto {
    players: Player[];
    gold: number;
    dragonsQuantity: number;
    towersQuantity: number;
    isDragonSoul: boolean;
    isNashorBuff: boolean;
    isElderDragon: boolean;
}