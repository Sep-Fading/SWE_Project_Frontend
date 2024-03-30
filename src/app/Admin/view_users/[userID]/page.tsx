"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";

interface Details {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };
  return (
    <div className="m-[5%]">
      <div className="bg-[#D9D9D9] shadow-md rounded p-[20px]">
        <div className="flex justify-between">
          <h2 className="text-xl">John Doe</h2>
          <h1 className="text-xl font-semibold">Line Manager</h1>
          <h2 className="text-xl">22053765</h2>
        </div>
        <hr className="border-3 border-black"></hr>
        <form onSubmit={handleSubmit} className="flex flex-col mt-[-10px]">
          <Header title="Personal Details" />
          <div className="grid grid-cols-2 place-items-center gap-4 mb-[-30px]">
            <div className="w-[90%]">
              <InputField
                label="First Name"
                type="text"
                name="firstName"
                value={details.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                value={details.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
              <InputField
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={details.phoneNumber}
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
          <Header title="Address" />
          <div className="grid grid-cols-2 place-items-center gap-4 mb-[-30px]">
            <div className="w-[90%]">
              <InputField
                label="Address"
                type="text"
                name="address"
                value={address.address}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
              <InputField
                label="Zip Code"
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
              <InputField
                label="City"
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
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
          <Header title="Bank Details" />
          <div className="grid grid-cols-2 place-items-center gap-4 mb-[-30px]">
            <div className="w-[90%]">
              <InputField
                label="Account Number"
                type="text"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleChange}
              />
            </div>
            <div className="w-[90%]">
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
          <Header title="Change Password" />
          <div className="grid grid-cols-2 place-items-center gap-4">
            <div className="w-[90%]">
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
            <div className="w-[90%]">
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
            "my-2 rounded-lg text-center bg-red-gradient text-white h-[40px] duration-200 hover:shadow-lg w-[180px] font-semibold"
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
