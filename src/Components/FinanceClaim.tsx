"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

interface ExpenseProps {
  amount: number;
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift";
  status: "completed" | "approved" | "rejected" | "rejectedf" | "pending";
  date: string;
  claimedBy: string;
  approvedBy?: string;
  approvedOn?: string;
  processed: boolean;
  comment?: string;
  onProcess?: () => void;
  onReject?: () => void; 

}

const Claim = ({
  amount,
  currency,
  type,
  status,
  date,
  claimedBy,
  approvedBy,
  approvedOn,
  processed,
  comment,
  onProcess,
  onReject,

}: ExpenseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white cursor-pointer rounded  hover:scale-[1.01] transition-transform duration-300 hover:shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-2 py-3 w-full"
      >
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
            <p className="text-sm text-gray-500">
              {claimedBy}, {date}
            </p>
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
        <div className="flex flex-col gap-1 grid-rows-2  text-left pb-2  ml-9 mr-5 whitespace-nowrap md:grid md:grid-cols-[2fr_2fr_2fr_2fr] md:ml-12">
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
            <h2 className="font-medium">Claimed by</h2>
            <p>{claimedBy}</p>
          </div>
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Claimed on</h2>
            <p>{date}</p>
          </div>
          <div className={`${approvedBy ? "flex md:block" : "hidden"} justify-between`}>
            <h2 className="font-medium">Approved by</h2>
            <p>{approvedBy}</p>
          </div>
          <div className={`${approvedBy ? "flex md:block" : "hidden"} justify-between`}>
            <h2 className="font-medium">Approved on</h2>
            <p>{approvedOn}</p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="font-medium">Receipts</h2>
            <Image
              src="/upload.svg"
              width={32}
              height={32}
              alt="Upload"
              onClick={() => {
                console.log("files");
              }}
              className="cursor-pointer ml-4"
            />
          </div>
        </div>
        <div className="ml-12 mr-4">
          {comment ? (
            <h2 className="mb-2 text-left font-medium">{comment}</h2>
          ) : null}
          {(status === "rejected" || status === "approved") &&
          processed === true ? (
            <h2
              className={`md:text-sm text-xs pb-2 ml-[-8px] text-left ${
                status === "rejected" ? "text-[#e74c3c]" : "text-[#4CAF50]"
              }`}
            >
              This claim has been {status}.
            </h2>
          ) : null}
        </div>
        {processed === false ? (
          <div className="flex w-full p-2 gap-1">
            <Button text={`${approvedBy && approvedOn ? "Process" : "Approve"} Claim`} onClick={onProcess} style="w-1/2" />
            <Button text="Reject Claim" onClick={onReject} style="w-1/2" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Claim;
