import React from "react";
import Navigation from "@/Components/Navigation";
import ClaimInfoBox from "@/Components/ClaimInfoBox";

const LineManagerPendingClaims: React.FC = () => {
  return (
    <div>
      <Navigation links={[]} />

      <header className="mx-[15rem] mt-[2rem]">
        <h1 className="text-2xl text-blue">Pending Claims</h1>
        <hr className="border-3 border-black w-[15rem]" />
      </header>

      <ClaimInfoBox />
    </div>
  );
};

export default LineManagerPendingClaims;
