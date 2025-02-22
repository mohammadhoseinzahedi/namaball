import {
  FOOTBALL_DATA_API_URL,
  FOOTBALL_DATA_API_AUTH_TOKEN,
} from "@/lib/constants";
import type { Competition, Standing, Area, Season } from "@/lib/types";

type Data = {
  filters: {
    season: number;
  };
  area: Area;
  competition: Competition;
  season: Season;
  standings: Standing[];
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const response = await fetch(
    `${FOOTBALL_DATA_API_URL}/competitions/${code}/standings`,
    {
      headers: { "X-Auth-Token": FOOTBALL_DATA_API_AUTH_TOKEN },
      next: { revalidate: 60 * 60 },
    }
  );

  if (!response.ok) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data: Data = await response.json();
  const competition = data.competition;
  const standings = data.standings;

  return Response.json({ competition, standings });
}
