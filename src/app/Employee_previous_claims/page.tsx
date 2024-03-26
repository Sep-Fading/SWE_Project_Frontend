import React from "react";
import Navigation from "@/Components/Navigation";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const EmployeePreviousClaims: React.FC = () => {

  const headings = ["Amount", "Type", "Description", "Date"];

  const buttons = ["View VAT Receipt"];

  return (
    <div>
      <Navigation links={[]} />
      <Header title="Previous Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default EmployeePreviousClaims;