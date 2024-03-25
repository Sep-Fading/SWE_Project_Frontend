"use client";

import { useState } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [reTypepassword, setReTypePassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleReTypePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReTypePassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };

  return (
    <div className="flex flex-col justify-evenly items-start mx-[20%]">
      <Header title="Forgotten Password" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-[100%] min-w-[400px] h-[55vh] shadow-md"
      >
        <InputField
          label="New password"
          icon={"password"}
          type="password"
          placeholder="Type your new password"
          value={password}
          handleChange={handlePasswordChange}
        />
        <InputField
          label="Confirm new password"
          icon={"password"}
          type="password"
          placeholder="Re-type your new password"
          value={reTypepassword}
          handleChange={handlePasswordChange}
        />
        <Button type="submit" text="Reset Password" onClick={onClick} />
      </form>
    </div>
  );
};

export default NewPassword;
