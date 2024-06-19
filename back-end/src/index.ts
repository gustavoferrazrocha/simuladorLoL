import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Simulation } from "./domain/simulation/Simulation";
import { team1, team2 } from "./mockData";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const simulation: Simulation = new Simulation();
  res.send(simulation.simulateGame(team1, team2));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
