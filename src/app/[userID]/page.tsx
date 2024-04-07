"use client";

import Image from "next/image";
import PieChart from "@/Components/PieChart";
import LineChart from "@/Components/LineChart";

const Page = () => {
  const categories = ["Travel", "Meal", "Night Stay", "Gift"];
  const expenses = [300, 50, 100, 150];

  const months = [
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const monthlyExpenses = [65, 59, 80, 159, 56, 55, 40, 34, 430, 100];

  return (
    <div className="grid grid-cols-2 gap-3 p-3 bg-gray-200">
      <div className="bg-white shadow-lg rounded col-span-2 px-4 py-2">
        <div className="flex justify-between">
          <h2 className="text-xl">John Doe</h2>
          <h1 className="text-xl font-semibold">Line Manager</h1>
          <h2 className="text-xl">22053765</h2>
        </div>
        <hr className="border-3 border-black"></hr>
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>John</p>
            <h2 className="font-medium">Last Name</h2>
            <p>Doe</p>
          </div>
          <div>
            <h2 className="font-medium">Email</h2>
            <p>johndoe@email.com</p>
            <h2 className="font-medium">Address</h2>
            <p>13 Lavender Avenue, E1 9JP, London, England</p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>0123456789</p>
            <h2 className="font-medium">Tax Code</h2>
            <p>0123456789</p>
          </div>
          <div>
            <h2 className="font-medium">Bank Details</h2>
            <h3 className="font-bold text-xs">Account Number</h3>
            <p>321242131413</p>
            <h3 className="font-bold text-xs">Sort Code</h3>
            <p>43-65-87</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-lg px-3 py-2 rounded-lg h-[480px]">
        <div className="flex">
          <h1 className="text-lg font-medium">
            Expenses Breakdown - April 2024
          </h1>
          <Image src="/expand.svg" alt="chart" width={24} height={24} />
        </div>
        <div className="grow">
          <PieChart labels={categories} data={expenses} />
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-lg px-3 py-2 rounded-lg h-[480px]">
        <div className="flex">
          <h1 className="text-lg font-medium">Monthly Expenses</h1>
          <Image src="/expand.svg" alt="chart" width={24} height={24} />
        </div>
        <div className="grow">
          <LineChart labels={months} data={monthlyExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Page;
