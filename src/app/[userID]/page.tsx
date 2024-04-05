"use client";

import PieChart from "@/Components/PieChart";
import LineChart from "@/Components/LineChart";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-3 bg-[#D9D9D9]">
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
      <PieChart />
      <LineChart />
    </div>
  );
};

export default Page;