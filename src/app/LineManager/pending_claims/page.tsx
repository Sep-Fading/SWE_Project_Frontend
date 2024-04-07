"use client";

// Imports the components
import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../../useProtectedRoute';

// Predefined headings and text for buttons are passed into the component ClaimInfoBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

const LineManagerPendingClaims = () => {
  //AUTH
  useProtectedRoute('LINEMANAGER');

  const headings = ["Claim Date", "Claim Amount", "Employee Claiming", "Uploaded Files"];
  const buttons = ["Approve Claim", "Reject Claim", "View Description"];

  return (
    <div className="flex flex-col mx-[20%]">
      <Header title="Pending Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default LineManagerPendingClaims;
