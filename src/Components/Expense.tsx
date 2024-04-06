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
    <article className="flex justify-between items-center shadow-lg rounded-md bg-[#D9D9D9] p-2 mx-3">
      <div className="">
        <h2 className="text-[1.75rem]">{type}</h2>
        <h3>
          Status: <span className={`text-${statusColor}-600 font-medium`}>{status}</span>
        </h3>
      </div>
      <h1 className="text-[2.5rem] font-medium">
        {currency}
        {amount}
      </h1>
      <div className="flex flex-col items-center">
        <h3 className="text-m text-blue">{date}</h3>
        <Button text="View VAT Receipt" style="w-[10rem]" />
      </div>
    </article>
  );
};
export default Expense;
