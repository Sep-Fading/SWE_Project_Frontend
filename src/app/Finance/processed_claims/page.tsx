"use client";
// Imports the Header and ClaimInfoBox components to use on this page
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the processed claims


const FinanceProcessedClaims = () => {
  //AUTH
  useProtectedRoute('FINANCE');

  const headings = ["Claim Amount", "Employee Claiming", "Processed On"];

  const buttons = ["More Info"];

  return (
    <div className="mx-[20%]">
      <Header title="Processed Claims" divStyle="mb-5 mt-5" hrStyle="w-[17rem]"/>
      <ClaimInfoBox headingText={headings} buttonText={buttons} />
    </div>
  );
};

export default FinanceProcessedClaims;
