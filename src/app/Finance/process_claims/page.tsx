"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Expense from "@/Components/FinanceClaim";
import FilterMenu from "@/Components/FilterMenu";
import SearchBar from "@/Components/SearchBar";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from "../../../useProtectedRoute";

interface Claim {
  amount: number;
  currency: string;
  type: string;
  status: string;
  date: string;
  claimedBy: string;
  processed: boolean;
  approvedBy?: string;
  approvedOn?: string;
  comment?: string;
}

interface ClaimsData {
  claims: Claim[];
}

const EmployeeClaims = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [claims, setClaims] = useState<ClaimsData>();

  // AUTH
  useProtectedRoute(["FINANCE"]);

  const handleFilterChange = (
    filters: Record<string, boolean | number[] | number>
  ) => {
    // Filter claims based on the selected filters
    console.log(filters);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // Add search logic here
  };

  return (
    <div className="bg-gray-100 flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
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
          <Expense
            amount={500}
            currency="£"
            type="Travel"
            status="rejected"
            date="12 April, 2024"
            claimedBy="Jane Doe"
            approvedBy="John Doe"
            approvedOn="15 April, 2024"
            processed={false}
            comment="Wrong receipts attached"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="my-1">Past claims</h2>
          <Expense
            amount={500}
            currency="£"
            type="Travel"
            status="rejected"
            date="12 March, 2024"
            claimedBy="Jane Doe"
            approvedBy="John Doe"
            approvedOn="15 March, 2024"
            processed={true}
          />
        </div>
      </main>
    </div>
  );
};

export default EmployeeClaims;
