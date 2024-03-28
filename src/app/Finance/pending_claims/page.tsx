import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const FinancePendingClaims = () => {

  const headings = ["Claim Amount", "Employee Claiming", "Approved By"];

  const buttons = ["Process Claim", "Reject Claim"];

  return (
    <div className="mx-[20%]">
      <Header title="Pending Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default FinancePendingClaims;