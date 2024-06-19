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
      name: "a",
      role: "top",
      cspm: 2,
      kda: 0
    },
    farm: 0,
    kills: 0,
    deaths: 0,
    assists: 0
  }
  const player: Player = new Player(playerData)

  const data: TeamDto = {
    players: [player],
    gold: 0,
    dragonsQuantity: 0,
    towersQuantity: 0,
    isDragonSoul: false,
    isNashorBuff: false,
    isElderDragon: false
  }
  const team: Team = new Team(data)
  const team2: Team = new Team(data)

  res.send(simulation.simulateGame(team, team2));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});