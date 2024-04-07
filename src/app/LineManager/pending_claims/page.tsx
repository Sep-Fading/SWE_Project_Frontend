"use client";

import { useState } from "react";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

interface Claim {
  employee: string;
  amount: string;
  date: string;
}

interface ClaimsData {
  claims: Claim[];
}

// Predefined headings and text for buttons are passed into the component ClaimInfoBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

const LineManagerPendingClaims = () => {
  const [claims, setClaims] = useState<ClaimsData>();
  //AUTH
  useProtectedRoute('LINEMANAGER');

  const headings = "Uploaded Files:";
  const employee = "John Doe";
  const amount = "500";
  const date = "Tue 12 Mar. 2023";
  const buttons = ["Approve Claim", "Reject Claim", "View Description"];

  return (
    <div className="flex flex-col mx-[20%]">
      <Header title="Pending Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox 
        headingText={headings} 
        buttonText={buttons} 
        employeeName={employee} 
        claimAmount={amount}
        date = {date}
      />
    </div>
  );
};

export default LineManagerPendingClaims;
