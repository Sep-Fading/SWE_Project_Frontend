"use client";

import { useState } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
      <Header title="Login" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-[100%] min-w-[400px] h-[55vh] shadow-md"
      >
        <div className="w-[70%]">
          <InputField
            label="Email"
            icon={"user"}
            type="email"
            placeholder="Type your email"
            value={email}
            handleChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col w-[70%]">
          <InputField
            label="Password"
            icon={"password"}
            type="password"
            placeholder="Type your password"
            value={password}
            handleChange={handlePasswordChange}
          />
          <Link
            href="/login/forgot_password"
            className="underline text-xs self-end"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" text="Login" onClick={onClick} />
      </form>
    </div>
  );
};

export default Login;
