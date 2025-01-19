type Group =
  | "GROUP_A"
  | "GROUP_B"
  | "GROUP_C"
  | "GROUP_D"
  | "GROUP_E"
  | "GROUP_F"
  | "GROUP_G"
  | "GROUP_H"
  | "GROUP_I"
  | "GROUP_J"
  | "GROUP_K"
  | "GROUP_L";

type Stage =
  | "FINAL"
  | "THIRD_PLACE"
  | "SEMI_FINALS"
  | "QUARTER_FINALS"
  | "LAST_16"
  | "LAST_32"
  | "LAST_64"
  | "ROUND_4"
  | "ROUND_3"
  | "ROUND_2"
  | "ROUND_1"
  | "GROUP_STAGE"
  | "PRELIMINARY_ROUND"
  | "QUALIFICATION"
  | "QUALIFICATION_ROUND_1"
  | "QUALIFICATION_ROUND_2"
  | "QUALIFICATION_ROUND_3"
  | "PLAYOFF_ROUND_1"
  | "PLAYOFF_ROUND_2"
  | "PLAYOFFS"
  | "REGULAR_SEASON"
  | "CLAUSURA"
  | "APERTURA"
  | "CHAMPIONSHIP_ROUND"
  | "RELEGATION_ROUND";

export type Area = {
  id: number;
  name: string;
  code: string;
  flag: string | null;
};

export type Competition = {
  id: number;
  name: string;
  code: string;
  emblem: string;
  type: "LEAGUE" | "LEAGUE_CUP" | "CUP" | "PLAYOFFS";
  numberOfAvailableSeasons?: number;
  area?: Area;
  currentSeason?: Season;
  lastUpdated?: string;
};

export type Standing = {
  stage: Stage;
  type: "TOTAL" | "HOME" | "AWAY";
  group: Group | null;
  table: {
    position: number;
    team: Team;
    playedGames: number;
    form: string | null;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  }[];
};

export type Season = {
  id: number;
  currentMatchday: number;
  startDate: string;
  endDate: string;
  winner: Team | null;
};

type Team = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  type?: "CLUB" | "NATIONAL";
  address?: string;
  clubColors?: string;
  founded?: number;
  website?: string;
  venue?: string | null;
  lastUpdated?: string;
};

type Referee = {
  id: number;
  name: string;
  type: "REF";
  nationality: string;
};

export type Match = {
  id: number;
  date: Date;
  utcDate: string;
  status:
    | "SCHEDULED"
    | "TIMED"
    | "IN_PLAY"
    | "PAUSED"
    | "EXTRA_TIME"
    | "PENALTY_SHOOTOUT"
    | "FINISHED"
    | "SUSPENDED"
    | "POSTPONED"
    | "CANCELLED"
    | "AWARDED";
  getMinute: () => string | null;
  matchday: number;
  stage: Stage;
  area: Area;
  competition: Competition;
  group: Group | null;
  season: Season;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    winner: "DRAW" | "HOME_TEAM" | "AWAY_TEAM" | null;
    duration: "REGULAR" | "EXTRA_TIME" | "PENALTY_SHOOTOUT";
    fullTime: {
      home: number | null;
      away: number | null;
    };
    halfTime: {
      home: number | null;
      away: number | null;
    };
  };
  referees: Referee[];
  lastUpdated: string;
};

export type DateSearchParam =
  | "dayBeforeYesterday"
  | "yesterday"
  | "today"
  | "tomorrow"
  | "dayAfterTomorrow";
