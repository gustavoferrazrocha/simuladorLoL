// src/mockData.ts

import { PlayerDto, Player } from "./domain/player";
import { TeamDto, Team } from "./domain/team";

const playerDataTeamOne1: PlayerDto = {
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

const playerDataTeamOne2: PlayerDto = {
    playerApiData: {
      name: "Tinowns",
      role: "mid",
      cspm: 8.8,
      kda: 9.6
    },
    farm: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    overall: 0,
    dpm: 672,
    fb: 0.6,
    ks: 0.26,
    dth: 0.8,
    gd10: 22,
    xpd10: 86,
    csd10: 1.4,
    gold: 0,
  };

const playerDataTeamOne3: PlayerDto = {
playerApiData: {
    name: "Croc",
    role: "jungle",
    cspm: 5.3,
    kda: 3.2
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 284,
fb: 0.33,
ks: 0.13,
dth: 0.25,
gd10: 46,
xpd10: 24,
csd10: -0.1,
gold: 0,
};

const playerDataTeamOne4: PlayerDto = {
playerApiData: {
    name: "Route",
    role: "adc",
    cspm: 8.8,
    kda: 5.6
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 628,
fb: 0.17,
ks: 0.29,
dth: 0.13,
gd10: 14,
xpd10: -44,
csd10: -9.1,
gold: 0,
};

const playerDataTeamOne5: PlayerDto = {
playerApiData: {
    name: "RedBert",
    role: "sup",
    cspm: 1.8,
    kda: 3.3
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 178,
fb: 0.22,
ks: 0.6,
dth: 0.25,
gd10: 190,
xpd10: 112,
csd10: 7.9,
gold: 0,
};

const playerDataTeamTwo1: PlayerDto = {
playerApiData: {
    name: "Wizer",
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
fb: 0.11,
ks: 0.19,
dth: 0.20,
gd10: 64,
xpd10: -65,
csd10: 0.9,
gold: 0,
};

const playerDataTeamTwo2: PlayerDto = {
playerApiData: {
    name: "CarioK",
    role: "jungle",
    cspm: 5.3,
    kda: 3.9
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 291,
fb: 0.56,
ks: 0.12,
dth: 0.23,
gd10: 65,
xpd10: 68,
csd10: -0.7,
gold: 0,
};

const playerDataTeamTwo3: PlayerDto = {
playerApiData: {
    name: "dyNquedo",
    role: "mid",
    cspm: 8.5,
    kda: 5.6
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 655,
fb: 0.33,
ks: 0.26,
dth: 0.16,
gd10: -10,
xpd10: 55,
csd10: 2.4,
gold: 0,
};

const playerDataTeamTwo4: PlayerDto = {
playerApiData: {
    name: "TitaN",
    role: "adc",
    cspm: 9.6,
    kda: 4.1
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 706,
fb: 0.28,
ks: 0.38,
dth: 0.22,
gd10: -132,
xpd10: -205,
csd10: -7.4,
gold: 0,
};

const playerDataTeamTwo5: PlayerDto = {
playerApiData: {
    name: "Kuri",
    role: "sup",
    cspm: 1.4,
    kda: 5.7
},
farm: 0,
kills: 0,
deaths: 0,
assists: 0,
overall: 0,
dpm: 182,
fb: 0.28,
ks: 0.4,
dth: 0.16,
gd10: 47,
xpd10: 155,
csd10: 4.1,
gold: 0,
};

const player1 = new Player(playerDataTeamOne1);
const player2 = new Player(playerDataTeamOne2);
const player3 = new Player(playerDataTeamOne3);
const player4 = new Player(playerDataTeamOne4);
const player5 = new Player(playerDataTeamOne5);
const player6 = new Player(playerDataTeamTwo1);
const player7 = new Player(playerDataTeamTwo2);
const player8 = new Player(playerDataTeamTwo3);
const player9 = new Player(playerDataTeamTwo4);
const player10 = new Player(playerDataTeamTwo5);


const teamData: TeamDto = {
  players: [player1, player3, player2, player4, player5],
  gold: 0,
  dragonsQuantity: 0,
  towersQuantity: 0,
  isDragonSoul: false,
  isNashorBuff: false,
  isElderDragon: false,
  kills: 0,
  name: "Loud",
};

const teamData2: TeamDto = {
  players: [player6, player7, player8, player9, player10],
  gold: 0,
  dragonsQuantity: 0,
  towersQuantity: 0,
  isDragonSoul: false,
  isNashorBuff: false,
  isElderDragon: false,
  kills: 0,
  name: "Pain",
};

const team1 = new Team(teamData);
const team2 = new Team(teamData2);

export { team1, team2 };
