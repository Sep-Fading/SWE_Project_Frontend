import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const EmployeePreviousClaims = () => {
  const headings = ["Amount", "Type", "Date", "Status"];

  const buttons = ["View Description", "View VAT Receipt"];

  return (
    <div className="mx-[15%]">
      <Header title="Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons} />
    </div>
  );
};

export default EmployeePreviousClaims;
