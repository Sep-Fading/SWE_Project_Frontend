"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import { User } from "@/types/User";
import { Claim } from "@/types/Claim";
import sendClaim from "@/lib/sendClaim";

interface FormData {
  amount: number | "";
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift" | "Other" | "";
  description: string;
  acknowledgement: boolean;
}

interface SendClaimProps {
  details: User;
}

const SendClaim = ({
  details: { user_id, first_name, last_name, email, phone_number, manager_id },
}: SendClaimProps) => {

  const [formData, setFormData] = useState<FormData>({
    amount: "",
    currency: "GBP",
    type: "",
    description: "",
    acknowledgement: false,
  });

  const [file, setFile] = useState<File | null>(null);

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      // Use a ternary operator to handle the checkbox separately
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : type === "number" ? (value !== '' ? parseFloat(value) : '') : value,
    }));
  };

   //function that stores the image file
   function handleImageChange(e: FormEvent<HTMLInputElement>){
    const target = e.target as HTMLInputElement &{
      files: FileList;
    }

    console.log('file', target.files[0])
    setFile(target.files[0])
    
  }

  const handleSubmit = () => {
    if (!formData.acknowledgement) {
      alert("Please acknowledge the declaration");
    } else {
      const claim: Claim = {
        claim_id: "",
        user_id: user_id,
        manager_id: manager_id,
        amount: formData.amount !== "" ? formData.amount : parseFloat(formData.amount),
        currency: formData.currency,
        type: formData.type !== "" ? formData.type : "Other",
        description: formData.description,
        status: "pending", // default status
        date: "",
        receipt: file,
        claimed_by: first_name + " " + last_name,
        comment: "",
      };
      sendClaim(claim);
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-2 items-center rounded min-h-[850px] h-dvh md:justify-evenly md:min-h-[750px] md:bg-[#D9D9D9] md:shadow-md md:h-[125vh]">
      <div className="grid grid-cols-2 w-[90%] md:flex md:justify-between md:w-[80%]">
        <div>
          <h2 className="font-medium">First Name</h2>
          <p>{first_name}</p>
        </div>
        <div>
          <h2 className="font-medium">Last Name</h2>
          <p>{last_name}</p>
        </div>
        <div className="order-last">
          <h2 className="font-medium">Email</h2>
          <p>{email}</p>
        </div>
        <div>
          <h2 className="font-medium">Phone Number</h2>
          <p>{phone_number}</p>
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
            required
          />
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="bg-transparent absolute my-2 ml-[-67px] cursor-pointer focus:outline-none"
          >
            <option value="GBP">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;£</option>
            <option value="USD">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$</option>
            <option value="EUR">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;€</option>
            <option value="JPY">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥</option>
            <option value="MXN">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₱</option>
            <option value="INR">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹</option>
            <option value="CHF">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₣</option>
            <option value="AUD">&nbsp;&nbsp;&nbsp;A$</option>
            <option value="CAD">&nbsp;&nbsp;&nbsp;C$</option>
            <option value="HKD">HK$</option>
            <option value="SGD">&nbsp;&nbsp;&nbsp;S$</option>
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
          required
        >
          <option value="" disabled>
            --Select Option--
          </option>
          <option value="Travel">Travel</option>
          <option value="Meal">Meal</option>
          <option value="Stay">Night Stay</option>
          <option value="Gift">Gift</option>
          <option value="Other">Other</option>
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
          onClick={handleImageChange}
          className="hidden"
          aria-describedby="file-upload-description"
          required
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
          I hereby declare that the information provided is true to the best of
          my knowledge and that the expenses claimed were incurred in the
          performance of my official duties.
        </label>
      </div>
      <Button
        type="submit"
        text="Submit"
        style="my-2 w-[90%] md:w-[80%]"
      />
    </form>
  );
};

export default SendClaim;
