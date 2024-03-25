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
    <div className="flex flex-col justify-evenly mx-[20%]">
      <Header title="Forgotten Password" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-[100%] min-w-[400px] h-[55vh] shadow-md"
      >
        <div className="w-[70%]">
          <InputField
            label="New password"
            icon={"password"}
            type="password"
            placeholder="Type your new password"
            value={password}
            handleChange={handlePasswordChange}
          />
        </div>
        <div className="w-[70%]">
          <InputField
            label="Confirm new password"
            icon={"password"}
            type="password"
            placeholder="Re-type your new password"
            value={reTypepassword}
            handleChange={handlePasswordChange}
          />
        </div>
        <Button type="submit" text="Reset Password" style="w-[200px]" onClick={onClick} />
      </form>
    </div>
  );
};

export default NewPassword;
