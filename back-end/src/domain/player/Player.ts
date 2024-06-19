import { PlayerDto } from "./PlayerDto";
import { Team } from "../team/Team";

export class Player {
    private name: string;
    private cspm: number;
    private role: string;
    private kda: number;
    private farm: number;
    private kills: number;
    private deaths: number;
    private assists: number;
    private overall: number;
    private dpm: number;
    private fb: number;
    private ks: number;
    private dth: number;
    private gd10: number;
    private xpd10: number;
    private csd10: number;
    private gold: number;

    constructor(data: PlayerDto) {
        this.name = data.playerApiData.name;
        this.cspm = data.playerApiData.cspm;
        this.role = data.playerApiData.role;
        this.kda = data.playerApiData.kda;
        this.farm = data.farm;
        this.kills = data.kills;
        this.deaths = data.deaths;
        this.assists = data.assists;
        this.overall = data.overall;
        this.dpm = data.dpm;
        this.fb = data.fb;
        this.ks = data.ks;
        this.dth = data.dth;
        this.gd10 = data.gd10;
        this.xpd10 = data.xpd10;
        this.csd10 = data.csd10;
        this.gold = data.gold
    }

    public getKda(): number {
        return this.kda;
    }

    public getName(): string {
        return this.name;
    }

    public getRole(): string {
        return this.role;
    }

    public getCspm(): number {
        return this.cspm;
    }
    public getFarm(): number {
        return this.farm;
    }

    public getOverall(): number {
        return this.overall;
    }

    public getDpm(): number {
        return this.dpm;
    }

    public getFb(): number {
        return this.fb;
    }

    public getKs(): number {
        return this.ks;
    }

    public getKills(): number {
        return this.kills;
    }

    public getDeath(): number {
        return this.deaths;
    }

    public getAssists(): number {
        return this.assists;
    }

    public getDth(): number {
        return this.dth;
    }

    public getGd10(): number {
        return this.gd10;
    }

    public getXpd10(): number {
        return this.xpd10;
    }

    public getCsd10(): number {
        return this.csd10;
    }

    public incrementKills(amount: number) {
        this.kills += amount;
    }

    public incrementDeaths(amount: number) {
        this.deaths += amount;
    }

    public incrementFarm(amount: number) {
        this.farm += amount;
    }

    public incrementGold(amount: number) {
        this.gold += amount;
    }

    public getGold(): number {
        return this.gold;
    }
    public getDeaths(): number {
        return this.deaths
    }
}
