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

  const employee = "John Doe";
  const type = "Travel"
  const amount = "500";
  const date = "5 April";
  const buttons = ["Approve Claim", "Reject Claim"];
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
            buttonsNeededVal = {true}
            showApprovedByVal = {false}
            status = {"pending"}
          />
      </div>
    </div>
  );
};

export default LineManagerPendingClaims;
