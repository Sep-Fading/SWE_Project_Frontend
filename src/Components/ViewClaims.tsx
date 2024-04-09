"use client";

import Image from "next/image";
import { useState, ChangeEvent } from "react";
import Header from "@/Components/Header";
import FilterMenu from "@/Components/FilterMenu";
import SearchBar from "@/Components/SearchBar";
import ClaimCard from "@/Components/FinanceClaim";
import { Claim } from "@/types/Claim";

interface ViewClaimsProps {
  claims: Claim[];
}

const ViewClaims = ({ claims }: ViewClaimsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (
    filters: Record<string, boolean | number[] | number>
  ) => {
    // Filter claims based on the selected filters
    console.log(filters);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // Add search logic here
  };

  // Handler for processing a claim
  const handleProcess = (id: string) => {};

  // Handler for rejecting a claim
  const handleReject = (id: string) => {};

  return (
    <div>
      <aside
        className={`${
          isOpen ? "" : "hidden"
        } border-t md:border-r-black md:min-w-[160px] md:max-w-[200px] md:border-2 md:row-start-1 md:row-span-2 md:col-start-1 md:block`}
      >
        <FilterMenu onFilterChange={handleFilterChange} />
      </aside>
      <div className="order-first flex flex-row gap-4 items-center justify-between mx-1 md:items-baseline md:col-start-2">
        <Header title="Claims" divStyle="hidden md:block" />
        <Image
          src={`/menu${isOpen ? "_open" : ""}.svg`}
          onClick={() => setIsOpen(!isOpen)}
          alt="Filter"
          width={60}
          height={60}
          className="md:hidden cursor-pointer"
        />
        <SearchBar
          placeholder="Search Claims"
          value=""
          handleChange={handleSearch}
          divStyle="w-full md:w-[40%]"
        />
      </div>
      <main className="order-last mx-1 md:mx-3 md:col-start-2">
        <div className="flex flex-col gap-1 mb-2">
          <h2 className="mb-1">Process claims</h2>
          {claims &&
            claims.map((claim, index) => (
              <ClaimCard
                key={index}
                id={claim.id}
                amount={claim.amount}
                currency={claim.currency}
                typeClaim={claim.typeClaim}
                status={claim.status}
                date={claim.date}
                claimedBy={claim.claimedBy}
                approvedBy={"claim.approvedBy"}
                approvedOn={"claim.approvedOn"}
                processed={false}
                comment={claim.comment}
                onProcess={() => handleProcess(claim.id)} // Pass the handler for processing
                onReject={() => handleReject(claim.id)}
              />
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="my-1">Past claims</h2>
        </div>
      </main>
    </div>
  );
};

export default ViewClaims;
