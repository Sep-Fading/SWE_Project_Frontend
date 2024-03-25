import React from "react";
import Navigation from "@/Components/Navigation";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const FinancePendingClaims: React.FC = () => {

  const headings = ["Claim Amount", "Employee Claiming", "Approved By"];

  const buttons = ["Process Claim", "Reject Claim"];

  return (
    <div>
      <Navigation links={[]} />
      <Header title="Pending Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default FinancePendingClaims;