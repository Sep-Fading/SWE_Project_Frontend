// Imports the Header and ClaimInfoBox components to use on this page
import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

// This page creates preset arrays of the headings and the text for the buttons
// The page is composed of a header and then ClaimInfoBox components for the pending claims
const FinancePendingClaims = () => {

  const headings = ["Claim Amount", "Employee Claiming", "Approved By"];

  const buttons = ["Process Claim", "Reject Claim"];

  return (
    <div className="mx-[20%]">
      <Header title="Pending Claims" divStyle="mb-5 mt-5"/>
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default FinancePendingClaims;