import {
  FOOTBALL_DATA_API_URL,
  FOOTBALL_DATA_API_AUTH_TOKEN,
} from "@/lib/constants";
import type { Match } from "@/lib/types";
import { NextRequest } from "next/server";
import { getDateQuery } from "@/lib/utils";
import { unstable_cache } from "next/cache";


type Data = {
  filters: {
    dateFrom: string;
    dateTo: string;
    permission: string;
  };
  resultSet: {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
  };
  matches: Match[];
};

async function getMatches(query: string) {
  const revalidate = 120;
  // This `key` will change every 120 seconds
  const key = `${query}-${Math.floor(new Date().valueOf() / (1000 * revalidate)).toString()}`;
  return unstable_cache(async () => {
    const response = await fetch(`${FOOTBALL_DATA_API_URL}/matches?${query}`, {
      headers: { "X-Auth-Token": FOOTBALL_DATA_API_AUTH_TOKEN },
    });
  
    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }
  
    const { matches } = await response.json() as Data;
    return matches;
  }, [key])();
  
}

export async function GET(request: NextRequest) {  
  const searchParams = request.nextUrl.searchParams;
  const daysOffset = Number(searchParams.get("daysOffset"));

  if (![-2, -1, 0, 1, 2].includes(daysOffset)) {
    return new Response("Invalid Days Offset", {
      status: 400,
    });
  }
  
  let matches: Match[] | null = null;
  try {
    matches = await getMatches(getDateQuery(daysOffset));
  } catch (error) {
    console.error(error);
  } finally {
    return Response.json(matches);
  }


}
