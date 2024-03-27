import Header from "@/Components/Header";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Navigation from "@/Components/Navigation";

const EmployeePreviousClaims = () => {
  const headings = ["Amount", "Type", "Date", "Status"];

  const buttons = ["View Description", "View VAT Receipt"];

  return (
    <div>
      <Navigation links={[]}/>
      <Header title="Claims" />
      <ClaimInfoBox headingText={headings} buttonText={buttons} />
    </div>
  );
};

export default EmployeePreviousClaims;
