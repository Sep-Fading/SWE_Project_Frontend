"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Expense from "@/Components/FinanceClaim";
import FilterMenu from "@/Components/FilterMenu";
import SearchBar from "@/Components/SearchBar";

const EmployeeClaims = ({claims}) => {
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
  const handleProcess = (claimID) => {
    
  };

  // Handler for rejecting a claim
  const handleReject = (claimID) => {

  };
  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
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
          {claims && claims.map((claim, index) => (
            <Expense
              key={index}
              amount={claim.amount}
              currency={claim.currency} 
              type={claim.typeClaim} 
              status={claim.status}
              date={claim.date}
              claimedBy={claim.claimedBy}
              approvedBy={"claim.approvedBy"}
              approvedOn={"claim.approvedOn"}
              processed={false}
              comment={claim.comment}
              onProcess={() => handleProcess(claim.claimID)}  // Pass the handler for processing
              onReject={() => handleReject(claim.claimID)} 
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

export default EmployeeClaims;
