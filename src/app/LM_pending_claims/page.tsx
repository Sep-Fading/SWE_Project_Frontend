import React from "react";
import Navigation from "@/Components/Navigation";
import ClaimInfoBox from "@/Components/ClaimInfoBox";
import Header from "@/Components/Header";

const LineManagerPendingClaims: React.FC = () => {
  return (
    <div>
      <Navigation links={[]} />
      <Header title="Pending Claims" />
      <ClaimInfoBox />
    </div>
  );
};

export default LineManagerPendingClaims;
