import {Express, Request, Response} from "express";
import {Simulation} from "../domain/simulation";
import {team1, team2} from "../mockData";

export class RouterAdapter {
  constructor(private readonly app: Express) { }

  createRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      const simulation = new Simulation([team1, team2]);
      simulation.simulateGame()
      res.send();
    });
  }
}

