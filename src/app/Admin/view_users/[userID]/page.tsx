"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";
import { Play } from "next/font/google";

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
// BACKEND INTEGRATION -------------------------------
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    taxCode: '',
  });

  const [address, setAddress] = useState({
    address: '',
    zipCode: '',
    city: '',
    country: '',
  });

  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    sortCode: '',
  });
  useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/${params.userID}/`, {withCredentials: true});
            const userData = response.data;
            setDetails({
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                phone_number: userData.phone_number,
                tax_code: userData.tax_code,
            });
            setAddress({
                address: userData.address,
                zip_code: userData.zip_code,
                city: userData.city,
                country: userData.country,
            });
            setBankDetails({
                account_number: userData.account_number,
                sort_code: userData.sort_code,
            });
        }
        catch (error) {
            console.error('Failed to fetch user details: ', error);
        }
    };

    fetchUserDetails();
  }, [params.userID]);
// UPDATING USER INFO ----------------------------------------
  const updateDetails = async () => {
    try {
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/update/${params.userID}/`,
            details,
            { withCredentials: true }
        );
        console.log('Details update successfully ', response.data);
    }
    catch (error) {
        console.error('Failed to update details: ', error);
    }
  };
  
  const updateAddress = async () => {
    try {
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/update/${params.userID}/`,
            address,
            { withCredentials: true }
        );
    }
    catch (error) {
        console.error('Failed to update address: ', error);
    }

  };

  const updateBankDetails = async () => {
    try {
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/update/${params.userID}/`,
            bankDetails,
                { withCredentials : true }
        );
        console.log('Bank details updated successfully', response.data);
    }
    catch (error) {
        console.error('Failed to update bank details: ', error);
    }
  };

// -----------------------------------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [stateKey, propertyName] = e.target.name.split('-');
    const value = e.target.value;
  
    if (stateKey === 'details') {
        setDetails((prevDetails) => ({
          ...prevDetails,
          [propertyName]: value,
        }));
    } else if (stateKey === 'address') {
        setAddress((prevAddress) => ({
          ...prevAddress,
          [propertyName]: value,
        }));
    } else if (stateKey === 'bankDetails') {
        setBankDetails((prevBankDetails) => ({
          ...prevBankDetails,
          [propertyName]: value,
        }));
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
                name="details-first_name"
                value={details.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Last Name"
                type="text"
                name="details-last_name"
                value={details.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Email"
                type="email"
                name="details-email"
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Phone Number"
                type="tel"
                name="details-phone_number"
                value={details.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Tax Number"
                type="tel"
                name="details-tax_code"
                value={details.taxCode}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={updateDetails}
              style="w-[150px] col-start-2 row-start-4 place-self-end mr-2"
            />
          </div>
          <Header title="Address" divStyle="mb-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="Address"
                type="text"
                name="address-address"
                value={address.address}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Zip Code"
                type="text"
                name="address-zip_code"
                value={address.zip_code}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="City"
                type="text"
                name="address-city"
                value={address.city}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Country"
                type="text"
                name="address-country"
                value={address.country}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={updateAddress}
              style="w-[150px] col-start-2 place-self-end mr-2"
            />
          </div>
          <Header title="Bank Details" divStyle="mb-2"/>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
            <div className="md:w-[90%]">
              <InputField
                label="Account Number"
                type="text"
                name="bankDetails-account_number"
                value={bankDetails.accountNumber}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[90%]">
              <InputField
                label="Sort Code"
                type="text"
                name="bankDetails-sort_code"
                value={bankDetails.sortCode}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              text="Update"
              onClick={updateBankDetails}
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
                value={"password"}
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
                value={"password"}
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
