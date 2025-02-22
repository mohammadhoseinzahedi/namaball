import { z } from "zod";

const EnvSchema = z.object({
  APP_URL: z.string().nonempty(),
  FOOTBALL_DATA_API_AUTH_TOKEN: z.string().nonempty(),
});

const env = EnvSchema.parse({
  APP_URL: process.env.APP_URL,
  FOOTBALL_DATA_API_AUTH_TOKEN: process.env.Football_DATA_API_AUTH_TOKEN,
});

export const APP_URL = env.APP_URL;
export const API_URL = `${env.APP_URL}/api/v1`;

export const FOOTBALL_DATA_API_URL = "https://api.football-data.org/v4";
export const FOOTBALL_DATA_API_AUTH_TOKEN = env.FOOTBALL_DATA_API_AUTH_TOKEN;
