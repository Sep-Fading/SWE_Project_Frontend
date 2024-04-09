import ViewClaims from "@/Components/ViewClaims";
import { getData } from "@/lib/fetchClaims";
import { Claim } from "@/types/Claim";

export default async function FinanceClaim() {
  const role = "employee";

  const claims: Claim[] = await getData(role, "userID", true); // change arguments
  const pastClaims: Claim[] = await getData(role, "userID", false); // change arguments

  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
      <ViewClaims claims={claims} pastClaims={claims} role={role}/>
    </div>
  );
};