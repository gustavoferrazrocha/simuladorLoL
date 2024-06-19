import { PlayerApiDto } from "./PlayerApiDto"

export interface PlayerDto {
    overall: number
    dpm: number
    fb: number
    ks: number
    dth: number
    gd10: number
    xpd10: number
    csd10: number
    playerApiData: PlayerApiDto
    farm: number
    kills: number
    deaths: number
    assists: number
    gold: number
}