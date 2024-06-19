"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(data) {
        this.name = data.playerApiData.name;
        this.cspm = data.playerApiData.cspm;
        this.role = data.playerApiData.role;
        this.kda = data.playerApiData.kda;
        this.farm = data.farm;
        this.kills = data.kills;
        this.deaths = data.deaths;
        this.assists = data.assists;
    }
    getKda() {
        return this.kda;
    }
    getCspm() {
        return this.cspm;
    }
    incrementKills(kills) {
        this.kills += kills;
    }
    incrementDeaths(deaths) {
        this.deaths += deaths;
    }
    incrementFarm(farm) {
        this.farm += farm;
    }
}
exports.Player = Player;
//     {
//       "name": "robo",
//       "role": "top",
//       "overall": 60,
//       "farm": 0,
//       "cspm": 7.3,
//       "kda": 3.2,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0
//     },
//     {
//       "name": "croc",
//       "role": "jg",
//       "overall": 60,
//       "farm": 0,
//       "cspm": 7.3,
//       "kda": 3.2,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0
//     },
//     {
//       "name": "tinows",
//       "role": "mid",
//       "overall": 60,
//       "farm": 0,
//       "cspm": 7.3,
//       "kda": 3.2,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0
//     },
//     {
//       "name": "route",
//       "role": "adc",
//       "overall": 70,
//       "farm": 0,
//       "cspm": 7.3,
//       "kda": 3.2,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0
//     },
//     {
//       "name": "redbert",
//       "role": "sup",
//       "overall": 60,
//       "farm": 0,
//       "cspm": 7.3,
//       "kda": 3.2,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0
//     }
//   ],
