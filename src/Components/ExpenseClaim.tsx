"use client";

import Image from "next/image";
import { useState, ChangeEvent } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import { Claim } from "@/types/Claim";
import { User } from "@/types/User";
import updateClaim from "@/lib/updateClaim";

interface claimProps {
  details: Claim;
  user: User;
  manager: boolean;
  processed: boolean;
  onProcess?: () => void;
  onReject?: () => void;
}

const ExpenseClaim = ({
  details: {
    claim_id,
    amount,
    currency,
    type,
    receipt,
    status,
    date,
    description,
    claimed_by,
    approved_by,
    approved_on,
    comment,
  },
  user: { first_name, last_name },
  manager,
  processed,
}: claimProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addComment, setAddComment] = useState("");

  const [hide, setHide] = useState(false);

  const handleHide = () => {
    const set = confirm("Are you sure you want to proceed?");
    if (set) {
      setHide(true);
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    // Set the path to the file you want to download
    link.href = '/receipt.png';
    // Set the filename for the download
    link.download = 'receipt.png';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger click on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddComment(e.target.value);
  };

  const acceptClaim = (manager: "manager" | "finance") => {
    const userConfirmed = confirm("Are you sure you want to proceed?");
    if (userConfirmed) {
      const claim: Partial<Claim> = {
        claim_id: claim_id,
        status: manager === "manager" ? "approved" : "processed",
        approved_by: manager === "manager" ? first_name + " " + last_name : "",
        approved_on:
          manager === "manager"
            ? new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "",
        comment: comment,
      };
      updateClaim(claim);
    }
  };

  const rejectClaim = (manager: "manager" | "finance") => {
    const userConfirmed = confirm("Are you sure you want to proceed?");
    if (userConfirmed) {
      const claim: Partial<Claim> = {
        claim_id: claim_id,
        status: manager === "manager" ? "rejected" : "rejectedF",
        approved_by: "",
        approved_on: "",
        comment: comment,
      };
      updateClaim(claim);
    }
  };

  return (
    <div className={`${hide && "hidden"} bg-white cursor-pointer rounded  hover:scale-[1.01] transition-transform duration-300 hover:shadow`}>
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
              {manager && `${claimed_by}, `}
              {date}
            </p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-xl flex">
            {currency}
            {amount}
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
        <div className="flex flex-col gap-1 grid-rows-2  text-left pb-2  ml-9 mr-5 md:mr-0 whitespace-nowrap md:grid md:grid-cols-[2fr_2fr_2fr_2fr] md:ml-20">
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Amount</h2>
            <p>
              {currency}
              {amount}
            </p>
          </div>
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Category</h2>
            <p>{type}</p>
          </div>
          <div
            className={`${
              manager ? "flex md:block" : "hidden"
            } justify-between`}
          >
            <h2 className="font-medium">Claimed by</h2>
            <p>{claimed_by}</p>
          </div>
          <div className="flex justify-between md:block">
            <h2 className="font-medium">Claimed on</h2>
            <p>{date}</p>
          </div>
          {(manager && approved_by) && (
            <div className="flex md:block justify-between">
              <h2 className="font-medium">Approved by</h2>
              <p>{approved_by}</p>
            </div>
          )}
          {(manager && approved_by) && (
            <div className="flex justify-between md:block">
              <h2 className="font-medium">Approved on</h2>
              <p>{approved_on}</p>
            </div>
          )}
          <div className="flex justify-between md:flex-col">
            <h2 className="font-medium">Receipts</h2>
            <Image
              src="/upload.svg"
              width={32}
              height={32}
              alt="Upload"
              onClick={handleDownload}
              className="cursor-pointer ml-4"
            />
          </div>
          <p className="mt-1">{description}</p>
        </div>
        <div className="ml-12 mr-4">
          {comment && <h2 className="mb-2 text-left font-medium">{comment}</h2>}
          {(status === "rejected" || status === "approved") && processed && (
            <h2
              className={`md:text-sm text-xs pb-2 ml-[-8px] text-left ${
                status === "rejected" ? "text-[#e74c3c]" : "text-[#4CAF50]"
              }`}
            >
              This claim has been {status}.
            </h2>
          )}
        </div>
        {(!processed && manager) && (
          <>
            <div className="mx-2">
              <textarea
                id="comment"
                name="comment"
                placeholder="Add a comment"
                value={addComment}
                onChange={handleChange}
                className="pl-2 py-1 border-2 border-b-4 border-black rounded-sm shadow h-[50px] w-full"
              />
            </div>
            <div className="flex w-full p-2 gap-1">
              <Button
                text={`${
                  approved_by !== "" || approved_on !== ""
                    ? "Process"
                    : "Approve"
                } Claim`}
                onClick={handleHide}
                style="w-1/2"
              />
              <Button
                text="Reject Claim"
                onClick={handleHide}
                style="w-1/2"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ExpenseClaim;
