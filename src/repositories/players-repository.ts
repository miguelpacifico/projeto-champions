import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
      "id": 1,
      "name": "Lionel Messi",
      "club": "Inter Miami",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      },
    },
    {
      "id": 2,
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norway",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 89,
        "Shooting": 93,
        "Passing": 75,
        "Dribbling": 80,
        "Defending": 45,
        "Physical": 88
      }
    },
    {
      "id": 3,
      "name": "Kylian Mbappé",
      "club": "Paris Saint-Germain",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 97,
        "Shooting": 88,
        "Passing": 80,
        "Dribbling": 92,
        "Defending": 36,
        "Physical": 75
      }
    },
    {
      "id": 4,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "Midfielder",
      "statistics": {
        "Overall": 91,
        "Pace": 76,
        "Shooting": 86,
        "Passing": 93,
        "Dribbling": 87,
        "Defending": 64,
        "Physical": 78
      }
    },
    {
      "id": 5,
      "name": "Vinícius Júnior",
      "club": "Real Madrid",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 95,
        "Shooting": 83,
        "Passing": 79,
        "Dribbling": 92,
        "Defending": 35,
        "Physical": 70
      }
    },
    {
      "id": 6,
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Poland",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 78,
        "Shooting": 92,
        "Passing": 79,
        "Dribbling": 85,
        "Defending": 44,
        "Physical": 82
      }
    },
    {
      "id": 7,
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Egypt",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 90,
        "Shooting": 87,
        "Passing": 81,
        "Dribbling": 90,
        "Defending": 45,
        "Physical": 75
      }
    },
    {
      "id": 8,
      "name": "Karim Benzema",
      "club": "Al-Ittihad",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 76,
        "Shooting": 88,
        "Passing": 83,
        "Dribbling": 87,
        "Defending": 39,
        "Physical": 74
      }
    },
    {
      "id": 9,
      "name": "Neymar Jr.",
      "club": "Al-Hilal",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 87,
        "Shooting": 83,
        "Passing": 85,
        "Dribbling": 92,
        "Defending": 37,
        "Physical": 70
      }
    },
    {
      "id": 10,
      "name": "Luka Modrić",
      "club": "Real Madrid",
      "nationality": "Croatia",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 74,
        "Shooting": 76,
        "Passing": 89,
        "Dribbling": 88,
        "Defending": 72,
        "Physical": 70
      }
    },
    {
      "id": 11,
      "name": "Harry Kane",
      "club": "Bayern Munich",
      "nationality": "England",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 70,
        "Shooting": 91,
        "Passing": 83,
        "Dribbling": 82,
        "Defending": 47,
        "Physical": 80
      }
    },
    {
      "id": 12,
      "name": "Joshua Kimmich",
      "club": "Bayern Munich",
      "nationality": "Germany",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 70,
        "Shooting": 74,
        "Passing": 86,
        "Dribbling": 84,
        "Defending": 82,
        "Physical": 78
      }
    },
    {
      "id": 13,
      "name": "Sadio Mané",
      "club": "Al-Nassr",
      "nationality": "Senegal",
      "position": "Forward",
      "statistics": {
        "Overall": 88,
        "Pace": 91,
        "Shooting": 83,
        "Passing": 79,
        "Dribbling": 88,
        "Defending": 44,
        "Physical": 75
      }
    },
    {
      "id": 14,
      "name": "Jan Oblak",
      "club": "Atlético Madrid",
      "nationality": "Slovenia",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 89,
        "Pace": 87,
        "Shooting": 92,
        "Passing": 78,
        "Dribbling": 89,
        "Defending": 50,
        "Physical": 90
      }
    },
    {
      "id": 15,
      "name": "Thibaut Courtois",
      "club": "Real Madrid",
      "nationality": "Belgium",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 89,
        "Pace": 86,
        "Shooting": 91,
        "Passing": 74,
        "Dribbling": 88,
        "Defending": 46,
        "Physical": 89
      }
    },
    {
      "id": 16,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "Defender",
      "statistics": {
        "Overall": 89,
        "Pace": 77,
        "Shooting": 60,
        "Passing": 71,
        "Dribbling": 72,
        "Defending": 91,
        "Physical": 86
      }
    },
    {
      "id": 17,
      "name": "Casemiro",
      "club": "Manchester United",
      "nationality": "Brazil",
      "position": "Midfielder",
      "statistics": {
        "Overall": 89,
        "Pace": 65,
        "Shooting": 73,
        "Passing": 75,
        "Dribbling": 75,
        "Defending": 88,
        "Physical": 90
      }
    },
    {
      "id": 18,
      "name": "Bruno Fernandes",
      "club": "Manchester United",
      "nationality": "Portugal",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 74,
        "Shooting": 84,
        "Passing": 88,
        "Dribbling": 82,
        "Defending": 70,
        "Physical": 75
      }
    },
    {
      "id": 19,
      "name": "Bernardo Silva",
      "club": "Manchester City",
      "nationality": "Portugal",
      "position": "Midfielder",
      "statistics": {
        "Overall": 88,
        "Pace": 77,
        "Shooting": 76,
        "Passing": 84,
        "Dribbling": 92,
        "Defending": 65,
        "Physical": 70
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(p => p.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
  return player;
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(p => p.id === id);

  if(index !== -1){
    database.splice(index,1);
    return true;
  }

  return false;
}

export const findAndModifyPlayer = async (
  id: number, 
  statistics: StatisticsModel
): Promise<PlayerModel> => {

  const playerindex = database.findIndex(p => p.id === id);

  if(playerindex !== -1){
    database[playerindex].statistics = statistics;
  }

  return database[playerindex];
}