import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const EmployeePreviousClaims = () => {
  const headings = ["Amount", "Type", "Description", "Date"];

  const buttons = ["View VAT Receipt"];

  return (
    <div>
      <Header title="Previous Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons} />
    </div>
  );
};

export default EmployeePreviousClaims;
