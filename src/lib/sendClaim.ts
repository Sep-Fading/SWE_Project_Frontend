import axios from "axios";
import { Claim } from "@/types/Claim";

export default async function sendClaim(claim: Claim){
  try {
    //change url to the correct one for sending the claim
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/employeeformmodel/`,
      claim,
      { withCredentials: true }
    );

    console.log("response: ", response);
  } catch (error) {
    console.error("Failed to fetch users: ", error);
  }
}
