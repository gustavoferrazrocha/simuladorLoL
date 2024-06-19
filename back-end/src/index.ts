import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Player } from "./domain/player/Player";
import { PlayerDto } from "./domain/player/PlayerDto";
import { Simulation } from "./domain/simulation/Simulation";
import { Team } from "./domain/team/Team";
import { TeamDto } from "./domain/team/TeamDto";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const simulation: Simulation = new Simulation()
  const playerData: PlayerDto = {
    playerApiData: {
      name: "Robo",
      role: "top",
      cspm: 8.3,
      kda: 2.3
    },
    farm: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    overall: 0,
    dpm: 578,
    fb: 0.11,
    ks: 0.24,
    dth: 0.26,
    gd10: 36,
    xpd10: -65,
    csd10: 0.4,
    gold: 0
  }

  const playerData2: PlayerDto = {
    playerApiData: {
      name: "Sustavo",
      role: "top",
      cspm: 8.1,
      kda: 3.4
    },
    farm: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    overall: 0,
    dpm: 550,
    fb: 0.28,
    ks: 0.19,
    dth: 0.20,
    gd10: 64,
    xpd10: -65,
    csd10: 0.9,
    gold: 0
  }
  const player: Player = new Player(playerData)
  const player2: Player = new Player(playerData2)


  const data: TeamDto = {
    players: [player],
    gold: 0,
    dragonsQuantity: 0,
    towersQuantity: 0,
    isDragonSoul: false,
    isNashorBuff: false,
    isElderDragon: false
  }
  const data2: TeamDto = {
    players: [player2],
    gold: 0,
    dragonsQuantity: 0,
    towersQuantity: 0,
    isDragonSoul: false,
    isNashorBuff: false,
    isElderDragon: false
  }
  const team: Team = new Team(data)
  const team2: Team = new Team(data2)

  res.send(simulation.simulateGame(team, team2));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});