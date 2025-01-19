import { Suspense } from "react";
import MatchesBar from "@/components/MatchesBar";
import Matches from "@/components/Matches";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Matches',
  description: 'Football Livescore',
}

function validateDate(date: string | undefined) {
  if (
    date === "dayBeforeYesterday" ||
    date === "yesterday" ||
    date === "today" ||
    date === "tomorrow" ||
    date === "dayAfterTomorrow"
  ) {
    return date;
  } else {
    return "today";
  }
}

const MatchesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) => {
  const { date } = await searchParams;
  const validatedDate = validateDate(date);
  return (
    <section className="text-sm md:text-lg">
      <MatchesBar date={validatedDate} />
      <Suspense
        key={validatedDate}
        fallback={<p className="conatainer p-4 mx-auto">Is Loading...</p>}
      >
        <Matches date={validatedDate} />
      </Suspense>
    </section>
  );
};

export default MatchesPage;
