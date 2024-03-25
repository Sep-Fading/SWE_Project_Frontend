import React from "react";
import Navigation from "@/Components/Navigation";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const FinanceProcessedClaims: React.FC = () => {

  const headings = ["Claim Amount", "Employee Claiming", "Processed On"];

  const buttons = ["More Info"];

  return (
    <div>
      <Navigation links={[]} />
      <Header title="Processed Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default FinanceProcessedClaims;