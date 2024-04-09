import ViewClaims from "@/Components/ViewClaims";
import { getData } from "@/lib/fetchClaims";
import { Claim } from "@/types/Claim";

export default async function FinanceClaim() {
  const claims: Claim[] = await getData();

  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
      <ViewClaims claims={claims} />
    </div>
  );
};
