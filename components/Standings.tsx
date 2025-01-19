import { API_URL } from "@/lib/constants";
import type { Competition, Standing } from "@/lib/types";
import StandingTable from "./StandingTable";
import { notFound } from "next/navigation";

async function getData(code: string | number) {
  let competition: null | Competition = null;
  let standings: null | Standing[] = null;

  if (!API_URL) {
    console.error("You have not set your APP_URL in .env file");
    return { competition, standings };
  }

  const response = await fetch(`${API_URL}/competitions/${code}/standings`, {
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    } else {
      console.error(`${response.statusText} (${response.status})`);      
      return { competition, standings };
    }
  }

  const data:{competition: Competition, standings: Standing[]} = await response.json();
  competition = data.competition;
  standings = data.standings;

  return { competition, standings };
}

const Standings = async ({ code }: { code: string }) => {
  const { competition, standings } = await getData(code);
  if (!competition || !standings) {
    return <p className="container p-4 mx-auto">Something Went Wrong...</p>;
  }
  return (
    <div className="container mx-auto p-1 md:px-4">
      {standings.map((standing: Standing) => (
        <StandingTable
          key={standing.group}
          className="text-sm md:text-lg mb-4"
          standing={standing}
          competition={competition}
        ></StandingTable>
      ))}
    </div>
  );
};

export default Standings;
