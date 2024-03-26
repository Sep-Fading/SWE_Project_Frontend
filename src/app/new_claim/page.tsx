"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";

const ExpenseClaim = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GBP"); // ["GBP", "USD", "EUR"]
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [acknowledgement, setAcknowledgement] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded h-[125vh] shadow-md"
      >
        <div className="flex justify-between w-[80%]">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>John</p>
          </div>
          <div>
            <h2 className="font-medium">Last Name</h2>
            <p>Doe</p>
          </div>
          <div>
            <h2 className="font-medium">Email</h2>
            <p>johndoe@email.com</p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>0123456789</p>
          </div>
        </div>
        <div className="w-[80%]">
          <label htmlFor="amount" className="font-medium">
            Amount
          </label>
          <div className="relative">
            <input
              id="amount"
              type="text"
              placeholder="Value"
              value={amount}
              onChange={handleAmountChange}
              className="pl-2 py-1 border-2 border-b-4 border-black rounded-sm shadow w-[100%]"
            />
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
              className="bg-transparent absolute my-2 ml-[-35px] focus:outline-none"
            >
              <option value="GBP">£</option>
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="JPY">¥</option>
              <option value="MXN">₱</option>
              <option value="INR">₹</option>
              <option value="CHF">₣</option>
            </select>
          </div>
        </div>
        <div className="w-[80%]">
          <label htmlFor="type" className="font-medium">
            Type of claim
          </label>
          <select
            id="type"
            className="pl-1 py-1 border-2 border-b-4 border-black rounded-sm shadow w-[100%]"
          >
            <option value="" disabled selected>
              --Select Option--
            </option>
            <option value="travel">Travel</option>
            <option value="meal">Meal</option>
            <option value="stay">Night Stay</option>
            <option value="gift">Gift</option>
          </select>
        </div>
        <TextArea
          label="Description"
          placeholder="Enter description"
          value={description}
          handleChange={handleDescriptionChange}
        />
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
        <Button type="submit" text="Submit" style="w-[80%]" onClick={onClick} />
      </form>
    </div>
  );
};

export default ExpenseClaim;
