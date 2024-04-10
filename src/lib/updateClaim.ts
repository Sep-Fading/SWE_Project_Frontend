import axios from "axios";
import { Claim } from "@/types/Claim";

export default async function sendClaim(claim: Partial<Claim>) {
  try {
    //change url to the correct one for sending the claim
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/update-claim-status/${claim.claim_id}/${claim.status}/${claim.approved_by}/${claim.approved_on}/${claim.comment}/`,

      { withCredentials: true } 
    );

    console.log("response: ", response);
  } catch (error) {
    console.error("Failed to fetch users: ", error);
  }
}
