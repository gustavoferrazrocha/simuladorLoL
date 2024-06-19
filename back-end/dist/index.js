"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Player_1 = require("./domain/player/Player");
const Simulation_1 = require("./domain/simulation/Simulation");
const Team_1 = require("./domain/team/Team");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    const simulation = new Simulation_1.Simulation();
    const playerData = {
        playerApiData: {
            name: "a",
            role: "top",
            cspm: 2,
            kda: 0
        },
        farm: 0,
        kills: 0,
        deaths: 0,
        assists: 0
    };
    const player = new Player_1.Player(playerData);
    const data = {
        players: [player],
        gold: 0,
        dragonsQuantity: 0,
        towersQuantity: 0,
        isDragonSoul: false,
        isNashorBuff: false,
        isElderDragon: false
    };
    const team = new Team_1.Team(data);
    const team2 = new Team_1.Team(data);
    res.send(simulation.simulateGame(team, team2));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
