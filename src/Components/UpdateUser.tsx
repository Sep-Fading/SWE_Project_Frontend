"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import { User } from "@/types/User";
import { updateDetails } from "@/lib/updateDetails";
import { flagPassword } from "@/lib/flagPassword";

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
        updateDetails(user_id, details);
        break;
      case "address":
        updateDetails(user_id, fullAddress);
        break;
      case "bankDetails":
        updateDetails(user_id, bankDetails);
        break;
      case "password":
        flagPassword(user_id);
        break;
      default:
        break;
    }
  };

  return (
    <form className="flex flex-col md:mt-[-10px]">
      <Header title="Personal Details" divStyle="my-2" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
        <div className="md:w-[90%]">
          <InputField
            label="First Name"
            type="text"
            name="details-first_name"
            value={details.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-[90%]">
          <InputField
            label="Last Name"
            type="text"
            name="details-last_name"
            value={details.last_name}
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
          onClick={() => {
            handleSubmit("details");
          }}
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2 md:row-start-4"
        />
      </div>
      <Header title="Address" divStyle="mb-2" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
        <div className="md:w-[90%]">
          <InputField
            label="Address"
            type="text"
            name="address-address"
            value={fullAddress.address}
            onChange={handleChange}
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
          onClick={() => {
            handleSubmit("address");
          }}
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2"
        />
      </div>
      <Header title="Bank Details" divStyle="mb-2" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
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
          onClick={() => {
            handleSubmit("bankDetails");
          }}
          style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2"
        />
      </div>
      <Header title="Change Password" divStyle="mb-2" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:place-items-center">
        <div className="md:w-[90%]">
          <Button
            type="submit" 
            text="Change Password" 
            onClick={() => {
                handleSubmit("password");
            }}
            style="w-full place-self-end mb-5 mt-2 md:w-40 md:mr-6 md:mb-0 md:col-start-2"
          />
        </div>
      </div>
    </form>
  );
};

export default UpdateUser;
