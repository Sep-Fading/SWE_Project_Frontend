"use client";
// Imports the Header and ClaimInfoBox components to use on this page
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the pending claims
const FinancePendingClaims = () => {
  //AUTH
  useProtectedRoute('FINANCE');

  const headings = "Approved By:";
  const buttons = ["Process Claim", "Reject Claim"];
  const employee = "John Doe";
  const amount = "500";

  return (
    <div className="mx-[20%]">
      <Header title="Pending Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox 
        headingText={headings} 
        buttonText={buttons} 
        employeeName={employee} 
        claimAmount={amount}
      />
    </div>
  );
};

export default FinancePendingClaims;
