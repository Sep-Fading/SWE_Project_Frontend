"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../../useProtectedRoute';

interface Claim {
  employee: string;
  amount: string;
  date: string;
}

interface ClaimsData {
  issues: Claim[];
}

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the processed claims


const FinanceProcessedClaims = () => {
  const [claims, setClaims] = useState<ClaimsData>();
  
  //AUTH
  useProtectedRoute('FINANCE');

  const employee = "John Doe";
  const amount = "500";
  const date = "5 April";
  const type = "Travel";
  const approval = "John Smith";
  const buttons = [""];
  const buttonsNeeded = false;
  const description = "I am claiming for travel expenses on my recent business trip to Frankfurt.";

  return (
    <div className="bg-gray-100 h-dvh grid gap-0 grid-cols-8 md:grid-cols-6 ">
      <div className="col-start-2 col-end-8 md:col-end-6">
          <Header title="Processed Claims" style="pt-[1rem] md:pt-0"/>
          <ClaimInfoBox 
            buttonText={buttons}
            employeeName={employee} 
            claimAmount={amount}
            date = {date}
            type = {type}
            description={description}
            approvedBy = {approval}
            buttonsNeededVal = {buttonsNeeded}
            showApprovedByVal = {true}
            status = "completed"
          />
      </div>
    </div>
  );
};

export default FinanceProcessedClaims;
