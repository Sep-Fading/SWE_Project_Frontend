"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import Axios from "axios";

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface FormData {
  amount: number;
  currency: string;
  type: string;
  description: string;
  acknowledgement: boolean;
}

const ExpenseClaim = () => {
  //Files for uploading VAT receipts
  const [state, setState] = useState('ready');
  const [file, setFile] = useState<File | undefined>();

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  
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

  //function that stores the image file
  function handleImageChange(e: React.FormEvent<HTMLInputElement>){
    const target = e.target as HTMLInputElement &{
      files: FileList;
    }

    console.log('working')
    setFile(target.files[0])
    
  }

  const handleSubmit = (e: FormEvent) => {

    // Add your login logic here


    console.log("file: "+file)
    e.preventDefault(); 
  
    if (typeof file === 'undefined')return;
    const imageData = new FormData();


    imageData.append('file',file, file.name);
    console.log(imageData.get("file"))
        //integates frontend to backend which handles the new claim
        Axios 
        //This is backend url 
            .post("http://localhost:8000/api/employeeformmodel/", { 
                lineManagerID: "1",
                dateMade: "2024-04-08",
                amount: formData.amount,
                currency: formData.currency,
                typeClaim: formData.type,
                description: formData.description,
                receipt: imageData.get("file"),
                acknowledgement: formData.acknowledgement,
                status: "PENDING",
                dateApproved: "2024-04-08",
                comments: "",
                user_id: null
            }) 
           
             
            .catch((err) => {}); 
       
       
    };
             


  return (
    <div className="flex flex-col justify-evenly md:mx-[10%]">
      <Header title="Expense Claim" divStyle="text-center my-4 md:text-left"/>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between gap-2 items-center rounded min-h-[850px] h-dvh md:justify-evenly md:min-h-[750px] md:bg-[#D9D9D9] md:shadow-md md:h-[125vh]"
      >
        <div className="grid grid-cols-2 w-[90%] md:flex md:justify-between md:w-[80%]">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>{userDetails.firstName}</p>
          </div>
          <div>
            <h2 className="font-medium">Last Name</h2>
            <p>{userDetails.lastName}</p>
          </div>
          <div className="order-last">
            <h2 className="font-medium">Email</h2>
            <p>{userDetails.email}</p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>{userDetails.phoneNumber}</p>
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
            onChange={handleImageChange}
            type="file"
            multiple
            className="hidden"
            aria-describedby="file-upload-description"
            //means only certain types of files are allowed to be uploaded in this case images
            accept=".pdf,.png,.jpg,.jpeg"
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
          style="my-2 w-[90%] md:w-[80%]"
          onClick={onClick}
        />
      </form>
    </div>
  );
  };

export default ExpenseClaim;
