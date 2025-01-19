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

function StandingTable({
  standing,
  competition,
}: StandingTableProps) {
  const tableHeaderRow = [
    { title: "#", className: "p-1 md:p-2" },
    { title: "Team", className: "w-full" },
    { title: "P", className: "p-1 md:p-2" },
    { title: "W", className: "p-1 md:p-2" },
    { title: "D", className: "p-1 md:p-2" },
    { title: "L", className: "p-1 md:p-2" },
    { title: "F", className: "p-1 md:p-2" },
    { title: "A", className: "p-1 md:p-2" },
    { title: "GD", className: "p-1 md:p-2" },
    { title: "PTS", className: "p-1 md:p-2" },
  ];
  return (
    <Table>
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
        {standing.table.map((table) => (
          <TableRow key={table.position}>
            <TableCell>{table.position}</TableCell>
            <TableCell>
              <div className="flex gap-2 pe-4 items-center">
                <img
                  className="h-5 w-5"
                  src={table.team.crest}
                  alt={table.team.name}
                />
                <div className="whitespace-nowrap">{table.team.shortName}</div>
              </div>
            </TableCell>
            <TableCell>{table.playedGames}</TableCell>
            <TableCell>{table.won}</TableCell>
            <TableCell>{table.draw}</TableCell>
            <TableCell>{table.lost}</TableCell>
            <TableCell>{table.goalsFor}</TableCell>
            <TableCell>{table.goalsAgainst}</TableCell>
            <TableCell>{table.goalDifference}</TableCell>
            <TableCell>{table.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default StandingTable;
