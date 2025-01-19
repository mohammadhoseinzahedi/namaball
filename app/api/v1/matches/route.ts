import {
  FOOTBALL_DATA_API_URL,
  FOOTBALL_DATA_API_AUTH_TOKEN,
} from "@/lib/constants";
import type { Match } from "@/lib/types";
import { NextRequest } from "next/server";
import { getDateQuery } from "@/lib/utils";

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

export async function GET(request: NextRequest) {
  if (!FOOTBALL_DATA_API_AUTH_TOKEN) {
    console.error(
      "You have not set your FOOTBALL_DATA_API_AUTH_TOKEN in .env file"
    );
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
  
  const searchParams = request.nextUrl.searchParams;
  const daysOffset = Number(searchParams.get("daysOffset"));

  if (![-2, -1, 0, 1, 2].includes(daysOffset)) {
    return new Response("Invalid Days Offset", {
      status: 400,
    });
  }
  const query = getDateQuery(daysOffset);

  const response = await fetch(`${FOOTBALL_DATA_API_URL}/matches?${query}`, {
    headers: { "X-Auth-Token": FOOTBALL_DATA_API_AUTH_TOKEN },
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data: Data = await response.json();

  return Response.json(data.matches);
}
