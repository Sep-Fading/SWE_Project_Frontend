import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";


const LineManagerPendingClaims = () => {
  const headings = ["Claim Date", "Claim Amount", "Employee Claiming", "Uploaded Files"];
  const buttons = ["Approve Claim", "Reject Claim", "View Description"];

  return (
    <div className="flex flex-col mx-[20%]">
      <Header title="Pending Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons}/>
    </div>
  );
};

export default LineManagerPendingClaims;
