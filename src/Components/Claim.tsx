"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

interface ExpenseProps {
  amount: number;
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift";
  status: "completed" | "approved" | "rejected" | "pending";
  date: string;
  comment?: string;
}

const Claim = ({
  amount,
  currency,
  type,
  status,
  date,
  comment,
}: ExpenseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white rounded hover:scale-[1.01] transition-transform duration-300 hover:shadow"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between px-2 py-3 w-full">
        <div className="flex items-center">
          <Image
            src={`/${status}.svg`}
            alt={status}
            width={35}
            height={35}
            className="bg-gray-100 rounded-full p-1 mx-1"
          />
          <div className="ml-2 text-left md:ml-3">
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
      </button>
      <div className={`${isOpen ? "" : "hidden"} text-gray-600`}>
      <div className="flex flex-col gap-1 grid-rows-2  text-left pb-2  ml-10 mr-5 whitespace-nowrap md:flex-row md:justify-between md:mr-12 md:ml-12">
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Amount</h2>
            <p>
              {amount}
              {currency}
            </p>
          </div>
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Category</h2>
            <p>{type}</p>
          </div>
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Claimed on</h2>
            <p>{date}</p>
          </div>
          <div className="flex justify-between md:flex-col md:items-center">
            <h2 className="font-medium">Receipts</h2>
            <Image
              src="/upload.svg"
              width={32}
              height={32}
              alt="Upload"
              onClick={() => {
                console.log("files");
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="ml-8 mr-4 md:ml-12">
        {comment ? (
          <h2 className="text-left font-medium mb-2">{comment}</h2>
        ) : null}
        {status === "rejected" || status === "approved" ? (
          <h2
            className={`md:text-sm text-xs pb-2 ml-[-12px] text-left ${
              status === "rejected" ? "text-[#e74c3c]" : "text-[#4CAF50]"
            }`}
          >
            This claim has been {status}.
          </h2>
        ) : null}
        </div>
      </div>
    </div>
  );
};
export default Claim;
