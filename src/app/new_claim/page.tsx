"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";

const ExpenseClaim = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [acknowledgement, setAcknowledgement] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    // Add your login logic here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex flex-col justify-evenly mx-[10%]">
      <Header title="Expense Claim" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-[100%] min-w-[400px] h-[95vh] shadow-md"
      >
        <div className="flex gap-10">
          <div>
            <h2>First Name</h2>
            <p>John</p>
          </div>
          <div>
            <h2>Last Name</h2>
            <p>Doe</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>johndoe@email.com</p>
          </div>
          <div>
            <h2>Phone Number</h2>
            <p>0123456789</p>
          </div>
        </div>
        <div className="flex flex-col relative w-[80%]">
          <label className="mb-1">Amount</label>
          <input
            type="text"
            placeholder="Value"
            value={amount}
            onChange={handleAmountChange}
            className="pl-2 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
          />
        </div>
        <div className="w-[80%]">
          <label>Type of claim</label>
          <select className="w-[100%] border-2 border-b-4 border-black rounded-sm shadow-sm py-1">
            <option value="" disabled selected>
              Select Options
            </option>
            <option value="type">Type</option>
            <option value="type">Type</option>
            <option value="type">Type</option>
            <option value="type">Type</option>
          </select>
        </div>
        <div className="flex flex-col relative w-[80%]">
          <label className="mb-1">Description</label>
          <input
            type="text"
            placeholder="Enter your text here"
            value={description}
            onChange={handleDescriptionChange}
            className="pl-2 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
          />
        </div>
        <div className="grid grid-rows-2 auto-cols-auto gap-1 w-[80%]">
          <label
            htmlFor="file-upload"
            className="text-sm row-start-1 col-start-1"
          >
            Upload Receipts/Documents
          </label>
          <p className="text-xs text-gray-500 row-start-2 col-start-1">
            Formats accepted: PDF, PNG, JPG. Allow multiple files
          </p>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            multiple
            className="hidden"
            aria-describedby="file-upload-description"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer row-span-2 col-start-2 justify-self-end place-self-center"
          >
            <Image
              src={"/file.svg"}
              alt="Login"
              width={50}
              height={50}
              className=""
            />
          </label>
        </div>
        <div className="flex items-center w-[80%]">
          <input id="declaration" type="checkbox" className="h-10 w-10 mr-2" />
          <label
            htmlFor="declaration"
            className="ml-2 block text-sm text-gray-900"
          >
            I hereby declare that the information provided is true to the best
            of my knowledge and that the expenses claimed were incurred in the
            performance of my official duties.
          </label>
        </div>
        <Button type="submit" text="Submit" onClick={onClick} />
      </form>
    </div>
  );
};

export default ExpenseClaim;
