import { PlayerApiDto } from "./PlayerApiDto"

export interface PlayerDto {
    playerApiData: PlayerApiDto
    farm: number
    kills: number
    deaths: number
    assists: number
    gold: number
    overall: number
    fighting: number
    consistency: number
    utility: number
    laning: number
    aggressiveness: number
    objectiveControl: number
}