import { PlayerApiDto } from "./PlayerApiDto"

export interface PlayerDto {
    playerApiData: PlayerApiDto
    farm: number
    kills: number
    deaths: number
    assists: number
}