import { PlayerDto } from "./PlayerDto";
import Constants from "../constants";

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
        this.dpm = data.playerApiData.dpm;
        this.fb = data.playerApiData.fb;
        this.ks = data.playerApiData.ks;
        this.dth = data.playerApiData.dth;
        this.gd10 = data.playerApiData.gd10;
        this.xpd10 = data.playerApiData.xpd10;
        this.csd10 = data.playerApiData.csd10;
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

    public incrementAssits(amount: number) {
        this.assists += amount;
    }

    public incrementDeaths(amount: number) {
        this.deaths += amount;
    }

    public incrementFarm(): number {
        const farmGained = Math.round(this.cspm);
        this.farm += farmGained;
        return farmGained;
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

    public calculatePlayerAttack(): number {
        const kda = this.kda;
        const dpm = this.dpm;
        const fb = this.fb;
        const ks = this.ks;

        const attack = (kda * Constants.KDA_WEIGHT) + (dpm * Constants.DPM_WEIGHT) + (fb * Constants.FB_WEIGHT) + (ks * Constants.KS_WEIGHT);

        return attack;
    }

    public calculatePlayerDefense(): number {
        const dth = this.dth;
        const gd10 = this.gd10;
        const xpd10 = this.xpd10;
        const csd10 = this.csd10;

        const defense = (dth * Constants.DTH_WEIGHT) + (gd10 * Constants.GD10_WEIGHT) + (xpd10 * Constants.XPD10_WEIGHT) + (csd10 * Constants.CSD10_WEIGHT);

        return defense;
    }
}
