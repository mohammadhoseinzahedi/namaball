import type { Competition } from "@/lib/types";
import { API_URL } from "@/lib/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

async function getCompetitions() {
  const response = await fetch(`${API_URL}/competitions`, {
    next: { revalidate: 86400 },
  });
  if (!response.ok) {
    console.error(`${response.statusText} (${response.status})`);
    return;
  }
  const competitions: Competition[] = await response.json();
  return competitions;
}

const Competition = ({ competition }: { competition: Competition }) => {
  return (
    <Card className="flex flex-col justify-between dark:bg-slate-700 dark:text-white">
      <CardHeader>
        <CardTitle>{competition.name}</CardTitle>
        <CardDescription>{competition.area?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="w-24 h-24 mx-auto mb-6"
          width={96}
          height={96}
          src={competition.emblem}
          alt={competition.name}
        />
        <p>Current MatchDay : {competition.currentSeason?.currentMatchday}</p>

        {competition.currentSeason?.winner && (
          <p>
            Competition Winner :
            <Image
              width={32}
              height={32}
              className="inline-block w-8 h-8 mx-2"
              src={competition.currentSeason.winner.crest}
              alt={competition.currentSeason.winner.name}
            ></Image>
            {competition.currentSeason.winner.name}
          </p>
        )}

        <p>
          Season :
          {` ${competition.currentSeason?.startDate} / ${competition.currentSeason?.endDate} `}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          className="flex-1 py-2 px-4 text-center text-white border dark:border-blue-900 rounded-xl bg-blue-500 hover:bg-blue-950 dark:bg-blue-900"
          href={`/competitions/${competition.code}`}
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

const Competitions = async () => {
  const competitions = await getCompetitions();
  if (!competitions) {
    return <p className="container p-4 mx-auto">Something Went Wrong...</p>;
  }
  return (
    <div className="container px-4 py-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {competitions.map((competition) => (
        <Competition key={competition.id} competition={competition} />
      ))}
    </div>
  );
};

export default Competitions;
