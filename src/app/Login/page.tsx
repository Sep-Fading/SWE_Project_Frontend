"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div className="flex flex-col  my-[25%] md:my-0 md:mx-[20%]">
      <Header title="Login" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-full min-w-[400px] min-h-[350px] shadow-md h-[55vh]"
      >
        <Header
          title="Login"
          divStyle="md:hidden"
          style="text-center"
          hrStyle="hidden"
        />
        <div className="w-[90%] md:w-[70%]">
          <InputField
            label="Email"
            icon={"user"}
            type="email"
            name="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[90%] md:w-[70%]">
          <InputField
            label="Password"
            icon={"password"}
            type="password"
            name="password"
            placeholder="Type your password"
            value={formData.password}
            onChange={handleChange}
          />
          <Link
            href="/login/forgot_password"
            className="underline text-xs self-end"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" text="Login" onClick={onClick} style="w-48" />
      </form>
    </div>
  );
};

export default Login;
