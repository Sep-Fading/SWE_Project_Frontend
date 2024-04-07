"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

interface ExpenseProps {
  amount: number;
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift";
  status: "completed" | "approved" | "rejected" | "pending";
  date: string;
  comment?: string;
}

const Expense = ({
  amount,
  currency,
  type,
  status,
  date,
  comment,
}: ExpenseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded px-2 py-3 hover:scale-[1.01] transition-transform duration-300 hover:shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={`/${status}.svg`}
            alt={status}
            width={35}
            height={35}
            className="bg-gray-100 rounded-full p-1 mx-1"
          />
          <div className="ml-3 text-left">
            <h1 className="text-lg">{type}</h1>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-xl flex">
            {amount}
            {currency}
            <Image
              src={`/${isOpen ? "drop_up" : "drop_down"}.svg`}
              alt="Arrow"
              width={24}
              height={24}
            />
          </h1>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} mt-4 mx-14 text-gray-600`}>
        <div className="flex justify-between">
          <h2>claimed amount:</h2>
          <h2>{amount}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Category:</h2>
          <h2>{type}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Claimed on:</h2>
          <h2>{date}</h2>
        </div>
        {comment ? (
          <h2 className="mt-1 text-left font-medium">{comment}</h2>
        ) : null}
        {status === "rejected" || status === "approved" ? (
          <h2
            className={`md:text-sm text-xs mt-3 ml-[-8px] text-left text-${
              status === "rejected" ? "[#e74c3c]" : "[#4CAF50]"
            }`}
          >
            This claim has been {status}.
          </h2>
        ) : null}
      </div>
    </button>
  );
};
export default Expense;
