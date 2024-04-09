import Claim from "@/Components/FinanceClaim";
import { getData } from "../app/api/getClaims";

async function ClaimList() {
  const claims = await getData();

  // Handler for processing a claim
  const handleProcess = (id: string) => {};

  // Handler for rejecting a claim
  const handleReject = (id: string) => {};

  return (
    <>
      {claims &&
        claims.map((claim, index) => (
          <Claim
            key={index}
            id={claim.id}
            amount={claim.amount}
            currency={claim.currency}
            typeClaim={claim.typeClaim}
            status={claim.status}
            date={claim.date}
            claimedBy={claim.claimedBy}
            approvedBy={"claim.approvedBy"}
            approvedOn={"claim.approvedOn"}
            processed={false}
            comment={claim.comment}
            onProcess={() => handleProcess(claim.id)} // Pass the handler for processing
            onReject={() => handleReject(claim.id)}
          />
        ))}
    </>
  );
}

export default ClaimList;
