"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";

interface FormData {
  password: string;
  confirmPassword: string;
}

const NewPassword = () => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    }
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };

  return (
    <div className="flex flex-col my-[25%] md:my-0 md:mx-[20%]">
      <Header title="Forgotten Password" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-full min-w-[400px] min-h-[350px] shadow-md h-[55vh]"
      >
        <Header
          title="Forgotten Password"
          divStyle="md:hidden"
          style="text-center"
          hrStyle="hidden"
        />
        <div className="w-[90%] md:w-[70%]">
          <InputField
            label="New password"
            icon={"password"}
            type="password"
            name="password"
            placeholder="Enter your new password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-[90%] md:w-[70%]">
          <InputField
            label="Confirm new password"
            icon={"password"}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          text="Reset Password"
          style="w-48"
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default NewPassword;
