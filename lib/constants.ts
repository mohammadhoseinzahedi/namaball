
export const APP_URL = process.env.APP_URL;
export const API_URL = APP_URL ? `${process.env.APP_URL}/api/v1` : undefined;

export const FOOTBALL_DATA_API_URL = "https://api.football-data.org/v4";
export const FOOTBALL_DATA_API_AUTH_TOKEN = process.env.Football_DATA_API_AUTH_TOKEN;
