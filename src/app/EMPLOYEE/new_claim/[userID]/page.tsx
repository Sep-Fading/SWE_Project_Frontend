import Header from "@/Components/Header";
import SendClaim from "@/Components/SendClaim";
import { fetchUser } from "@/lib/fetchUser";

export default async function ExpenseClaim({ params }: { params: { userID: string } }) {

  const details = await fetchUser(params.userID);

  return (
    <div className="flex flex-col justify-evenly md:mx-[10%]">
      <Header title="Expense Claim" divStyle="text-center my-4 md:text-left" />
      <SendClaim details={details}/>
    </div>
  );
}
