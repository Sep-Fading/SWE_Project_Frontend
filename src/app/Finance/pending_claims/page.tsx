"use client";
// Imports the Header and ClaimInfoBox components to use on this page
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../../useProtectedRoute';

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the pending claims
const FinancePendingClaims = () => {
  //AUTH
  useProtectedRoute('FINANCE');

  const buttons = ["Process Claim", "Reject Claim"];
  const employee = "John Doe";
  const amount = "500";
  const date = "5 April";
  const type = "Travel";
  const approval = "John Smith";
  const description = "I am claiming for travel expenses on my recent business trip to Frankfurt.";

  return (
    <div className="bg-gray-100 h-dvh grid gap-0 grid-cols-8 md:grid-cols-6 ">
      <div className="col-start-2 col-end-8 md:col-end-6">
          <Header title="Pending Claims" style="pt-[1rem] md:pt-0"/>
          <ClaimInfoBox 
            buttonText={buttons} 
            employeeName={employee} 
            claimAmount={amount}
            date = {date}
            type = {type}
            description = {description}
            approvedBy = {approval}
            buttonsNeededVal = {true}
            showApprovedByVal = {true}
            status = "approved"
          />
      </div>
    </div>
  );
};

export default FinancePendingClaims;
