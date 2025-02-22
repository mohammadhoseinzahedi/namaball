import type { Match, DateSearchParam } from "@/lib/types";
import { API_URL } from "@/lib/constants";
import Image from "next/image";
import ClientTime from "@/components/ClientTime";
import ClientDate from "@/components/ClientDate";

function getQuery(date: DateSearchParam) {
  switch (date) {
    case "dayBeforeYesterday":
      return "daysOffset=-2";
    case "yesterday":
      return "daysOffset=-1";
    case "tomorrow":
      return "daysOffset=1";
    case "dayAfterTomorrow":
      return "daysOffset=2";
    default:
      return "";
  }
}
async function getMatches(query: string = "") {
  const response = await fetch(`${API_URL}/matches?${query}`);
  if (!response.ok) {
    console.error(`${response.statusText} (${response.status})`);
    return;
  }
  const matches: Match[] = await response.json();
  return matches;
}

const Match = ({ match }: { match: Match }) => {
  return (
    <>
      <div className="bg-lime-300">
        <div className="container mx-auto flex flex-wrap p-2 md:px-8 items-center">
          <Image
            className="mr-4 w-[30px] h-[30px]"
            width={30}
            height={30}
            src={match.competition.emblem}
            alt={match.competition.name}
          />
          <div className="my-auto">
            <div>{match.competition.name}</div>
            <div>{match.area.name}</div>
          </div>

          <div className="my-auto ml-auto">
            <ClientDate date={match.utcDate} />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap p-2 md:px-8">
        <div className="flex flex-col">
          <div>
            <Image
              className="mb-2 w-[30px] h-[30px]"
              width={30}
              height={30}
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
            />
          </div>
          <div>
            <Image
              className="w-[30px] h-[30px]"
              width={30}
              height={30}
              src={match.awayTeam.crest}
              alt={match.awayTeam.name}
            />
          </div>
        </div>

        <div className="flex flex-col mx-4">
          <div className="flex-1 content-center">
            {match.homeTeam.shortName || `${match.homeTeam.name.slice(0, 20)} ...`}
          </div>
          <div className="flex-1 content-center">
            {match.awayTeam.shortName || match.awayTeam.name}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex-1 content-center">
            {match.score.fullTime.home}
          </div>
          <div className="flex-1 content-center">
            {match.score.fullTime.away}
          </div>
        </div>

        <div className="my-auto ml-auto">
          {match.status === "TIMED" && <ClientTime date={match.utcDate} />}
          {match.status === "IN_PLAY" && "In Play"}
          {match.status === "PAUSED" && "Half Time"}
          {match.status === "FINISHED" && "Finished"}
        </div>
      </div>
    </>
  );
};

const Matches = async ({ date }: { date: DateSearchParam }) => {
  const query = getQuery(date);
  const matches = await getMatches(query);
  if (!matches) {
    return <p className="container p-4 mx-auto">Something Went Wrong...</p>;
  }
  if (matches.length === 0) {
    return (
      <p className="container p-4 mx-auto">
        There is no matches for selected date please choose another date.
      </p>
    );
  }
  return matches.map((match) => <Match key={match.id} match={match} />);
};

export default Matches;
