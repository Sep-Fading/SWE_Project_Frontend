"use client";
// Imports the Header and ClaimInfoBox components to use on this page
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';
import useClaimsActions from "../useClaimsActions";

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the pending claims
const FinancePendingClaims = () => {
  //AUTH
  useProtectedRoute('FINANCE');

  

  //api
  const {
    claims,
    isLoading,
    error,
    processClaim,
    rejectClaim
  } = useClaimsActions();

  // Handler for processing a claim
  const handleProcess = (claimID) => {
    processClaim(claimID).catch(console.error);
  };

  // Handler for rejecting a claim
  const handleReject = (claimID) => {
    rejectClaim(claimID).catch(console.error);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const forClaimID=claims[0]?.claimID
  const headings = "Approved By:";
  const buttons = ["Process Claim", "Reject Claim"];
  const employee = "John Doe";
  const amount = claims[0]?.amount;

  return (
    <div className="mx-[20%]">
      <Header title="Pending Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox
        key={forClaimID}
        headingText={headings} 
        buttonText={buttons} 
        employeeName={employee}
        claimAmount={amount}
        onProcess={() => handleProcess(forClaimID)}
        onReject={() => handleReject(forClaimID)}
      />
    </div>
  );
};

export default FinancePendingClaims;
