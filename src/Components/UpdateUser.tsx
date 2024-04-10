"use client";

import { useState, ChangeEvent, FormEvent, use } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import { User } from "@/types/User";
import { updateDetails } from "@/lib/updateDetails";

interface Details {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  tax_code: string;
}

interface Address {
  address: string;
  zip_code: string;
  city: string;
  country: string;
}

interface BankDetails {
  account_number: string;
  sort_code: string;
}

interface Password {
  password: string;
  confirmPassword: string;
}

interface UpdateUserProps {
  details: User;
}

const UpdateUser = ({
  details: {
    user_id,
    first_name,
    last_name,
    role,
    email,
    phone_number,
    address,
    zip_code,
    city,
    country,
    account_number,
    sort_code,
    tax_code,
  },
}: UpdateUserProps) => {
  const [details, setDetails] = useState<Details>({
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
    tax_code: tax_code,
  });

  const [fullAddress, setFullAddress] = useState<Address>({
    address: address,
    zip_code: zip_code,
    city: city,
    country: country,
  });

  const [bankDetails, setBankDetails] = useState<BankDetails>({
    account_number: account_number,
    sort_code: sort_code,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [stateKey, propertyName] = e.target.name.split("-");
    const value = e.target.value;

    switch (stateKey) {
      case "details":
        setDetails((prevDetails) => ({
          ...prevDetails,
          [propertyName]: value,
        }));
        break;
      case "address":
        setFullAddress((prevFullAddress) => ({
          ...prevFullAddress,
          [propertyName]: value,
        }));
        break;
      case "bankDetails":
        setBankDetails((prevBankDetails) => ({
          ...prevBankDetails,
          [propertyName]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (fields: string) => {
    switch (fields) {
      case "details":
        console.log("details: ", details);
        updateDetails(user_id, details);
        break;
      case "address":
        updateDetails(user_id, fullAddress);
        break;
      case "bankDetails":
        updateDetails(user_id, bankDetails);
        break;
      case "password":
        updateDetails(user_id, bankDetails);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col md:mt-[-10px]">
      <Header title="Personal Details" divStyle="my-2" />
      <form
        onSubmit={() => {
          handleSubmit("details");
        }}
        className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center"
      >
        <div className="md:w-[90%]">
          <InputField
            label="First Name"
            type="text"
            name="details-first_name"
            value={details.first_name}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Last Name"
            type="text"
            name="details-last_name"
            value={details.last_name}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Email"
            type="email"
            name="details-email"
            value={details.email}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Phone Number"
            type="tel"
            name="details-phone_number"
            value={details.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Tax Number"
            type="tel"
            name="details-tax_code"
            value={details.tax_code}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          text="Update"
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2 md:row-start-4"
        />
      </form>
      <Header title="Address" divStyle="mb-2" />
      <form onSubmit={() => {
          handleSubmit("address");
        }} className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
        <div className="md:w-[90%]">
          <InputField
            label="Address"
            type="text"
            name="address-address"
            value={fullAddress.address}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Zip Code"
            type="text"
            name="address-zip_code"
            value={fullAddress.zip_code}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="City"
            type="text"
            name="address-city"
            value={fullAddress.city}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Country"
            type="text"
            name="address-country"
            value={fullAddress.country}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          text="Update"
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2"
        />
      </form>
      <Header title="Bank Details" divStyle="mb-2" />
      <form onSubmit={() => {
            handleSubmit("bankDetails");
          }} className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
        <div className="md:w-[90%]">
          <InputField
            label="Account Number"
            type="text"
            name="bankDetails-account_number"
            value={bankDetails.account_number}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Sort Code"
            type="text"
            name="bankDetails-sort_code"
            value={bankDetails.sort_code}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          text="Update"
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2"
        />
      </form>
      <Header title="Change Password" divStyle="mb-2" />
      <form onSubmit={() => {
            handleSubmit("password");
          }} className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
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
        <Button
          type="submit"
          text="Update"
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2 md:row-start-2"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
