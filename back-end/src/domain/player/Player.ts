import { PlayerDto } from "./PlayerDto";

export class Player {
    //vem da api
    private name: string;
    private cspm: number;
    private role: string;
    private kda: number;
    private farm: number;
    private kills: number;
    private deaths: number;
    private assists: number;
    
    constructor(data: PlayerDto) {
        this.name = data.playerApiData.name
        this.cspm = data.playerApiData.cspm
        this.role = data.playerApiData.role
        this.kda = data.playerApiData.kda
        this.farm = data.farm
        this.kills = data.kills
        this.deaths = data.deaths
        this.assists = data.assists
    }

    public getKda(): number {
        return this.kda;
    }

    public getCspm(): number {
        return this.cspm;
    }

    public incrementKills (kills: number) {
        this.kills += kills;
    }

    public incrementDeaths (deaths: number) {
        this.deaths += deaths;
    }

    public incrementFarm (farm: number) {
        this.farm += farm;
    }
}


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