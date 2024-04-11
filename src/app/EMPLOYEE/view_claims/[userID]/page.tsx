import ViewClaims from "@/Components/ViewClaims";
import { fetchClaims } from "@/lib/fetchClaims";
import { Claim } from "@/types/Claim";
import { fetchUser } from "@/lib/fetchUser";

export default async function FinanceClaim({ params }: { params: { userID: string } }) {
  const role = "employee";
  const claims = await fetchClaims(role, params.userID, true); // change arguments
  const pastClaims = await fetchClaims(role, params.userID, false); // change arguments

  const dummyClaims: Claim[] = [
    {
      claim_id: "1",
      user_id: "1",
      manager_id: "4",
      amount: 100,
      currency: "£",
      type: "Meal",
      description: "Lunch with client",
      receipt: null,
      status: "pending",
      date: "11 April, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "2",
      user_id: "1",
      manager_id: "4",
      amount: 3000,
      currency: "$",
      type: "Travel",
      description: "Business trip to Hawaii",
      receipt: null,
      status: "rejected",
      date: "4 April, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "4",
      user_id: "1",
      manager_id: "4",
      amount: 120,
      currency: "£",
      type: "Night Stay",
      description: "Business trip to London",
      receipt: null,
      status: "approved",
      date: "2 March, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "3",
      user_id: "1",
      manager_id: "4",
      amount: 5000,
      currency: "$",
      type: "Travel",
      description: "Let me go to Hawaii",
      receipt: null,
      status: "rejectedF",
      date: "23 March, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "4",
      user_id: "1",
      manager_id: "4",
      amount: 40,
      currency: "€",
      type: "Gift",
      description: "Bought wine for a client",
      receipt: null,
      status: "approved",
      date: "2 April, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "5",
      user_id: "1",
      manager_id: "4",
      amount: 120,
      currency: "£",
      type: "Other",
      description: "Bought Tickets for a client",
      receipt: null,
      status: "pending",
      date: "6 March, 2024",
      claimed_by: "Sepehr Shamloo",
    },
  ];

  const dummyPastClaims: Claim[] = [
    {
      claim_id: "5",
      user_id: "1",
      manager_id: "4",
      amount: 750,
      currency: "£",
      type: "Night Stay",
      description: "Hotel in London, business trip",
      receipt: null,
      status: "processed",
      date: "1 April, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "6",
      user_id: "1",
      manager_id: "4",
      amount: 3580,
      currency: "€",
      type: "Travel",
      description: "Business trip to Malaga",
      receipt: null,
      status: "processed",
      date: "4 March, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "7",
      user_id: "1",
      manager_id: "4",
      amount: 5000,
      currency: "$",
      type: "Night Stay",
      description: "Stayed at a hotel in Hawaii for business",
      receipt: null,
      status: "processed",
      date: "30 february, 2024",
      claimed_by: "Sepehr Shamloo",
    },
    {
      claim_id: "7",
      user_id: "1",
      manager_id: "4",
      amount: 679,
      currency: "€",
      type: "Meal",
      description: "Lunch with buyers",
      receipt: null,
      status: "processed",
      date: "3 January, 2024",
      claimed_by: "Sepehr Shamloo",
    },
  ];
  const user = await fetchUser(params.userID); // change arguments

  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
      <ViewClaims claims={dummyClaims} user={user} pastClaims={dummyPastClaims} role={role}/>
    </div>
  );
};