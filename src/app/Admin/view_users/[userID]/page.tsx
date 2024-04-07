"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";

interface Details {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  taxCode: string;
}

interface Address {
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

interface BankDetails {
  accountNumber: string;
  sortCode: string;
}

interface Password {
  password: string;
  confirmPassword: string;
}

const Post = ({ params }: { params: { userID: string } }) => {
  const [details, setDetails] = useState<Details>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phoneNumber: "0123456789",
    taxCode: "123456",
  });
  const [address, setAddress] = useState<Address>({
    address: "13 Lavender Avenue",
    zipCode: "E18 1AA",
    city: "London",
    country: "England",
  });
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    accountNumber: "321242131413",
    sortCode: "43-65-87",
  });
  const [password, setPassword] = useState<Password>({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [stateKey, propertyName] = e.target.name.split('-');
    const value = e.target.value;
  
    switch (stateKey) {
      case 'details':
        setDetails((prevState) => ({
          ...prevState,
          [propertyName]: value,
        }));
        break;
      case 'address':
        setAddress((prevState) => ({
          ...prevState,
          [propertyName]: value,
        }));
        break;
      case 'bankDetails':
        setBankDetails((prevState) => ({
          ...prevState,
          [propertyName]: value,
        }));
        break;
      case 'password':
        setPassword((prevState) => ({
          ...prevState,
          [propertyName]: value,
        }));
        break;
      default:
        console.error('Invalid state key');
    }
  };  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };
  return (
    <div className="bg-gray-100 md:p-[5%]">
      <div className="bg-white shadow-md rounded p-[20px]">
        <Link href="/Admin/view_users">
          <Image src="/back.svg" alt="Back" width={26} height={26} className="mb-2"/>
        </Link>
        <div className="flex justify-between">
          <h2 className="text-xl">John Doe</h2>
          <h1 className="text-xl font-semibold">Line Manager</h1>
          <h2 className="text-xl">22053765</h2>
        </div>
        <hr className="border-3 border-black"></hr>
        <form onSubmit={handleSubmit} className="flex flex-col md:mt-[-10px]">
          <Header title="Personal Details" divStyle="my-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="First Name"
                type="text"
                name="firstName"
                value={details.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                value={details.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={details.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Tax Number"
                type="tel"
                name="taxCode"
                value={details.taxCode}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={onClick}
              style="w-[150px] col-start-2 row-start-4 place-self-end mr-2"
            />
          </div>
          <Header title="Address" divStyle="mb-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="Address"
                type="text"
                name="address"
                value={address.address}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Zip Code"
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="City"
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Country"
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={onClick}
              style="w-[150px] col-start-2 place-self-end mr-2"
            />
          </div>
          <Header title="Bank Details" divStyle="mb-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="Account Number"
                type="text"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Sort Code"
                type="text"
                name="sortCode"
                value={bankDetails.sortCode}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={onClick}
              style="w-[150px] col-start-2 place-self-end mr-2"
            />
          </div>
          <Header title="Change Password" divStyle="mb-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="Password"
                type="text"
                name="password"
                placeholder="Confirm new password"
                icon={"password"}
                value={password.password}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Confirm Password"
                type="text"
                name="confirmPassword"
                placeholder="Confirm new password"
                icon={"password"}
                value={password.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={onClick}
              style="w-[150px] col-start-2 place-self-end mr-2"
            />
          </div>
        </form>
        <button
          className={
            "mt-5 rounded-lg text-center bg-red-gradient text-white py-1 duration-200 hover:shadow-lg font-semibold w-full"
          }
          type="submit"
          onClick={onClick}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Post;
