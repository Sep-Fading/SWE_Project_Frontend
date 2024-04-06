"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import Expense from "@/Components/Expense";
import FilterMenu from "@/Components/FilterMenu";
import SearchBar from "@/Components/SearchBar";

const EmployeeClaims = () => {
  const handleFilterChange = (
    filters: Record<string, boolean | number[] | number>
  ) => {
    // Filter claims based on the selected filters
    console.log(filters);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add search logic here
  };

  return (
    <div className="flex flex-col gap-2 my-2 md:my-0 md:gap-0 md:grid md:grid-cols-[auto_1fr]">
      <aside className="border-t md:border-r-black md:min-w-[160px] md:max-w-[200px] md:border-2 md:row-start-1 md:row-span-2 md:col-start-1">
        <FilterMenu onFilterChange={handleFilterChange} />
      </aside>
      <div className="order-first flex flex-row gap-4 items-baseline justify-between mx-1 md:col-start-2">
        <Header title="Claims" divStyle="hidden md:block" />
        <SearchBar
          placeholder="Search Claims"
          value=""
          handleChange={handleSearch}
          divStyle="w-full md:w-[40%]"
        />
      </div>
      <main className="flex flex-col gap-4 order-last mx-1 md:mx-3 md:col-start-2">
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="12 March"
        />
      </main>
    </div>
  );
};

export default EmployeeClaims;
