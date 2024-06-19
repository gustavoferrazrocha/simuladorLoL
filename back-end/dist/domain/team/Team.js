"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(data) {
        this.players = data.players;
        this.gold = data.gold;
        this.dragonsQuantity = data.dragonsQuantity;
        this.towersQuantity = data.towersQuantity;
        this.isDragonSoul = data.isDragonSoul;
        this.isNashorBuff = data.isNashorBuff;
        this.isElderDragon = data.isElderDragon;
    }
    getPlayers() {
        return this.players;
    }
}
exports.Team = Team;
