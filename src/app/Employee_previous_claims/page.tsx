import React from "react";
import Navigation from "@/Components/Navigation";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";



const EmployeeClaims: React.FC = () => {

  // Preset data for the headings and the buttons

  const headings = ["Amount", "Type", "Date", "Status"];

  const buttons = ["View Description", "View VAT Receipt"];

  // Returns the page as predefined components - header component and the claim info box component

  return (
    <div>
      <Navigation links={[]} />
      <Header title="Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default EmployeeClaims;