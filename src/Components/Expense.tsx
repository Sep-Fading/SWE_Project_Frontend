"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

interface ExpenseProps {
  amount: number;
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift";
  status: "Completed" | "Approved" | "Rejected" | "Pending";
  date: string;
}

const Expense = ({ amount, currency, type, status, date }: ExpenseProps) => {
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    switch (status) {
      case "Completed":
        setStatusColor("blue");
        break;
      case "Approved":
        setStatusColor("green");
        break;
      case "Rejected":
        setStatusColor("red");
        break;
      case "Pending":
        setStatusColor("yellow");
        break;
      default:
        setStatusColor("black");
    }
  }, [status]);

  return (
    <article className="flex justify-between items-center shadow-lg rounded-md bg-[#D9D9D9] p-2">
      <div className="">
        <h2 className="text-[1.75rem]">{type}</h2>
        <h3 className="text-m text-blue">{date}</h3>
      </div>
      <h1 className="text-[2.5rem] font-medium">
        {currency}
        {amount}
      </h1>
      <div className="flex flex-col items-center">
      <h3 className={`text-${statusColor}-600 font-medium`}>{status}</h3>
        
        <Button text="VAT Receipts" style="w-28 md:w-40" />
      </div>
    </article>
  );
};
export default Expense;
