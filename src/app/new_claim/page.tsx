"use client";

import { useState, useEffect, ChangeEvent, FormEvent, use } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";

interface FormData {
  amount: number;
  currency: string;
  type: string;
  description: string;
  acknowledgement: boolean;
}

const ExpenseClaim = () => {
  const [formData, setFormData] = useState<FormData>({
    amount: 0.0,
    currency: "GBP",
    type: "",
    description: "",
    acknowledgement: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      // Use a ternary operator to handle the checkbox separately
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const onClick = () => {
    // Add your login logic here
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex flex-col justify-evenly md:mx-[10%]">
      <Header title="Expense Claim" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded  shadow-md h-[110vh] md:h-[125vh]"
      >
        <Header
          title="Expense Claim"
          divStyle="md:hidden"
          style="text-center"
          hrStyle="hidden"
        />
        <div className="grid grid-cols-2 w-[90%] md:flex md:justify-between md:w-[80%]">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>John</p>
          </div>
          <div>
            <h2 className="font-medium">Last Name</h2>
            <p>Doe</p>
          </div>
          <div className="order-last">
            <h2 className="font-medium">Email</h2>
            <p>johndoe@email.com</p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>0123456789</p>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%]">
          <label htmlFor="amount" className="font-medium">
            Amount
          </label>
          <div className="relative">
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="Value"
              value={formData.amount}
              onChange={handleChange}
              className="pl-2 py-1 border-2 border-b-4 border-black rounded-sm shadow w-full"
            />
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
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
        <div className="w-[90%] md:w-[80%]">
          <label htmlFor="type" className="font-medium">
            Type of claim
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="pl-1 py-1 border-2 border-b-4 border-black rounded-sm shadow w-full"
          >
            <option value="" disabled>
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
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="grid grid-rows-2 auto-cols-auto gap-1 w-[90%] md:w-[80%]">
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
            <Image src={"/upload.svg"} alt="Login" width={50} height={50} />
          </label>
        </div>
        <div className="flex items-center w-[90%] md:w-[80%]">
          <input
            id="declaration"
            name="acknowledgement"
            type="checkbox"
            checked={formData.acknowledgement}
            onChange={handleChange}
            className="h-10 w-10 mr-2"
          />
          <label
            htmlFor="declaration"
            className="ml-2 block text-sm text-gray-900"
          >
            I hereby declare that the information provided is true to the best
            of my knowledge and that the expenses claimed were incurred in the
            performance of my official duties.
          </label>
        </div>
        <Button
          type="submit"
          text="Submit"
          style="w-[90%] md:w-[80%]"
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default ExpenseClaim;
