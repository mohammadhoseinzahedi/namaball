import Image from "next/image";
import { Standing, Competition } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type StandingTableProps = {
  standing: Standing;
  competition: Competition;
  className?: string;
};

function StandingTable({ standing, competition }: StandingTableProps) {
  const tableHeaderRow = [
    { title: "#" },
    { title: "Team", className: "w-full" },
    { title: "P", className: "text-center" },
    { title: "W", className: "text-center" },
    { title: "D", className: "text-center" },
    { title: "L", className: "text-center" },
    { title: "F", className: "text-center" },
    { title: "A", className: "text-center" },
    { title: "GD", className: "text-center" },
    { title: "PTS", className: "text-center" },
  ];
  return (
    <Table className="caption-top">
      <TableCaption>{standing.group ?? competition.name}</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaderRow.map(({ title, className }) => (
            <TableHead key={title} className={className}>
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {standing.table.map((row) => (
          <TableRow key={row.team.name}>
            <TableCell>{row.position}</TableCell>
            <TableCell>
              <div className="flex gap-2 pe-4 items-center">
                <Image className="h-5 w-5" src={row.team.crest} alt={row.team.name} width={20} height={20} />
                <div className="whitespace-nowrap">{row.team.shortName}</div>
              </div>
            </TableCell>
            <TableCell className="text-center">{row.playedGames}</TableCell>
            <TableCell className="text-center">{row.won}</TableCell>
            <TableCell className="text-center">{row.draw}</TableCell>
            <TableCell className="text-center">{row.lost}</TableCell>
            <TableCell className="text-center">{row.goalsFor}</TableCell>
            <TableCell className="text-center">{row.goalsAgainst}</TableCell>
            <TableCell className="text-center">{row.goalDifference}</TableCell>
            <TableCell className="text-center">{row.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default StandingTable;
