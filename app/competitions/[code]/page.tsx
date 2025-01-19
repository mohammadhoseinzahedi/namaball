import Standings from "@/components/Standings";
import { Suspense } from "react";
const CompetitionPage = async ({
  params,
}: {
  params: Promise<{ code: string }>;
}) => {
  const { code } = await params;
  return (
    <Suspense
      key={code}
      fallback={<p className="conatainer p-4 mx-auto">Is Loading...</p>}
    >
      <Standings code={code} />
    </Suspense>
  );
};

export default CompetitionPage;
