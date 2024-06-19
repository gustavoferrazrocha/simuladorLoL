// src/mockData.ts

import { PlayerDto } from "./domain/player/PlayerDto";
import { TeamDto } from "./domain/team/TeamDto";
import { Player } from "./domain/player/Player";
import { Team } from "./domain/team/Team";

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
  gold: 0,
};

const playerData2: PlayerDto = {
  playerApiData: {
    name: "Sustavo",
    role: "top",
    cspm: 1.1,
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
  gold: 0,
};

const player1 = new Player(playerData);
const player2 = new Player(playerData2);

const teamData: TeamDto = {
  players: [player1, player1, player1, player1, player1],
  gold: 0,
  dragonsQuantity: 0,
  towersQuantity: 0,
  isDragonSoul: false,
  isNashorBuff: false,
  isElderDragon: false,
  kills: 0,
  name: "Pain",
};

const teamData2: TeamDto = {
  players: [player2, player2, player2, player2, player2],
  gold: 0,
  dragonsQuantity: 0,
  towersQuantity: 0,
  isDragonSoul: false,
  isNashorBuff: false,
  isElderDragon: false,
  kills: 0,
  name: "Loud",
};

const team1 = new Team(teamData);
const team2 = new Team(teamData2);

export { team1, team2 };
