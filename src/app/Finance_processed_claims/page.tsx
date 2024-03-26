import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const FinanceProcessedClaims = () => {
  const headings = ["Claim Amount", "Employee Claiming", "Processed On"];

  const buttons = ["More Info"];

  return (
    <div className="mx-[20%]">
      <Header title="Processed Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons} />
    </div>
  );
};

export default FinanceProcessedClaims;
