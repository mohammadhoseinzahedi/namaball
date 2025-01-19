import Link from "next/link";
import { daysOffsetToDateString } from "@/lib/utils";
import clsx from "clsx";
import { DateSearchParam } from "@/lib/types";

const MatchesBar = ({ date }: { date: DateSearchParam }) => {

  const links = [
    {
      label: daysOffsetToDateString(-2),
      href: "/matches?date=dayBeforeYesterday",
      isActive: date === "dayBeforeYesterday",
    },
    {
      label: "Yesterday",
      href: "/matches?date=yesterday",
      isActive: date === "yesterday",
    },
    {
      label: "Today",
      href: "/matches",
      isActive: date === "today",
    },
    {
      label: "Tomorrow",
      href: "/matches?date=tomorrow",
      isActive: date === "tomorrow",
    },
    {
      label: daysOffsetToDateString(2),
      href: "/matches?date=dayAfterTomorrow",
      isActive: date === "dayAfterTomorrow",
    },
  ];

  return (
    <nav className="py-1 bg-slate-100 text-slate-500 text-sm md:text-base">
      <div className="container mx-auto flex flex-wrap p-1 justify-center">
        {links.map(({ label, href, isActive }) => (
          <Link
            key={label}
            href={href}
            className={clsx("block p-1", { "text-black italic": isActive })}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MatchesBar;