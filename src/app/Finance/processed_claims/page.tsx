"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

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

  const buttons = ["More Info"];

  const employee = "John Doe";
  const amount = "500";
  const date = "Tue 12 Mar. 2023";

  return (
    <div className="mx-[20%]">
      <Header title="Processed Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox 
        buttonText={buttons} 
        employeeName={employee} 
        claimAmount={amount} 
        date={date}
      />
    </div>
  );
};

export default FinanceProcessedClaims;
