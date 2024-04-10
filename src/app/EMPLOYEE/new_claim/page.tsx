import Header from "@/Components/Header";
import SendClaim from "@/Components/SendClaim";
import { getData } from "@/lib/fetchUser";

export default async function ExpenseClaim() {
  //need to implement getting userId from session
  const details = await getData("user-info", "userID");

  return (
    <div className="flex flex-col justify-evenly md:mx-[10%]">
      <Header title="Expense Claim" divStyle="text-center my-4 md:text-left" />
      <SendClaim details={details}/>
    </div>
  );
}
