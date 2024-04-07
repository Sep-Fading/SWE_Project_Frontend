"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import Expense from "@/Components/Expense";
import FilterMenu from "@/Components/FilterMenu";
import SearchBar from "@/Components/SearchBar";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../useProtectedRoute';


const EmployeeClaims = () => {
  // AUTH
  useProtectedRoute(['EMPLOYEE', 'FINANCE', 'LINEMANAGER']);

  const handleFilterChange = (filters: Record<string, boolean | number[] | number>) => {
    // Filter claims based on the selected filters
    console.log(filters);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add search logic here
  };

  return (
    <div className="flex">
      <aside className="border-r-black border-2 w-[20%]">
        <FilterMenu onFilterChange={handleFilterChange} />
      </aside>
      <main className="flex flex-col gap-4 w-full">
        <div className="flex flex-row items-baseline justify-between mx-2">
          <Header title="Claims" />
          <SearchBar placeholder="Search Claims" value="" handleChange={handleSearch} divStyle="w-[40%]" />
          <div className="relative w-[40%]">
            <input
              type="search"
              placeholder="Search Claims"
              className="rounded-md w-full py-2 pl-2 pr-10 shadow-md bg-[#D9D9D9]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Image src={`/search.svg`} alt="Search" width={28} height={28} />
            </div>
          </div>
        </div>
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
      </main>
    </div>
  );
};

export default EmployeeClaims;
