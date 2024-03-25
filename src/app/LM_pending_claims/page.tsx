import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";

const LineManagerPendingClaims = () => {
  return (
    <div className="flex flex-col mx-[20%]">
      <Header title="Pending Claims" />
      <ClaimInfoBox />
    </div>
  );
};

export default LineManagerPendingClaims;
