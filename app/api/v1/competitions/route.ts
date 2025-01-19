import {
  FOOTBALL_DATA_API_URL,
  FOOTBALL_DATA_API_AUTH_TOKEN,
} from "@/lib/constants";
import type { Competition } from "@/lib/types";

type Data = {
  count: number;
  filters: {
    client: string;
    areas?: string;
  };
  competitions: Competition[];
};

export async function GET() {
  if (!FOOTBALL_DATA_API_AUTH_TOKEN) {
    console.error(
      "You have not set your FOOTBALL_DATA_API_AUTH_TOKEN in .env file"
    );
    return new Response("Internal Server Error", {
      status: 500,
    });
  }

  const response = await fetch(`${FOOTBALL_DATA_API_URL}/competitions`, {
    headers: { "X-Auth-Token": FOOTBALL_DATA_API_AUTH_TOKEN },
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data: Data = await response.json();

  return Response.json(data.competitions);
}
