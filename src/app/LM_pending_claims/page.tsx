import React from "react";
import Navigation from "@/Components/Navigation";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";

const LineManagerPendingClaims: React.FC = () => {

  const headings = ["Claim Date", "Claim Amount", "Employee Claiming", "Uploaded Files"];

  const buttons = ["Approve Claim", "Reject Claim", "View Description"];

  return (
    <div>
      <Navigation links={[]} />
      <Header title="Pending Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default LineManagerPendingClaims;
