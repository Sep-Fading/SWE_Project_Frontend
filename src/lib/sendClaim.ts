import axios from "axios";
import { Claim } from "@/types/Claim";

export default async function sendClaim(claim: Claim){
  try {
    //change url to the correct one for sending the claim
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employeeformmodel/`,
      {
        user_id: claim.user_id,
        manager_id: claim.manager_id,
        amount: claim.amount,
        currency: claim.currency,
        type: claim.type.toUpperCase(),
        description: claim.description,
        receipt: claim.receipt,
      },
      { withCredentials: true }
    );

    console.log("response: ", response);
  } catch (error) {
    console.error("Failed to fetch users: ", error);
  }
}
