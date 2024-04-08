"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import TextArea from "@/Components/TextArea";


interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  details: string;
}

const RequestPasswordReset = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    details: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
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
    <div className="flex flex-col my-[25%] md:my-0 md:mx-[20%]">
      <Header title="Request Password Reset" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-full min-w-[400px] min-h-[350px] shadow-md h-[75vh]"
      >
        <Header
          title="Request Password Reset"
          divStyle="md:hidden"
          style="text-center"
        />
        <div className="w-[90%] md:w-[80%]">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-[90%] md:w-[80%]">
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="w-[90%] md:w-[80%]">
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <TextArea
          label="Details"
          name="details"
          placeholder="Enter details"
          value={formData.details}
          onChange={handleChange}
        />

        <Button
          type="submit"
          text="Request Password Reset"
          style="w-60"
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default RequestPasswordReset;
