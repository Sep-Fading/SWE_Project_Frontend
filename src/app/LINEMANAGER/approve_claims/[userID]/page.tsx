import ViewClaims from "@/Components/ViewClaims";
import { fetchClaims } from "@/lib/fetchClaims";
import { Claim } from "@/types/Claim";
import { fetchUser } from "@/lib/fetchUser";

export default async function FinanceClaim({ params }: { params: { userID: string } }) {
  const role = "manager";

  const claims: Claim[] = await fetchClaims(role, params.userID, true); // change arguments
  const pastClaims: Claim[] = await fetchClaims(role, params.userID, false); // change arguments

  const user = await fetchUser(params.userID); // change arguments

  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
      <ViewClaims claims={claims} user={user} pastClaims={pastClaims} role={role}/>
    </div>
  );
};