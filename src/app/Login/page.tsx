"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      //console.log("Response from backend:", response);
      if (response.ok) {
        router.push("/home");
      } else {
        // Handling HTTP error statuses gracefully.
        const errorData = await response.json();
        alert(errorData.message || "An error occurred during login. Please try again.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      alert("Failed to log in. Please check your internet connection and try again.");
    }
  };

  return (
    <div className="flex flex-col  my-[25%] md:my-0 md:mx-[20%]">
      <Header title="Login" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-full min-w-[400px] min-h-[350px] shadow-md h-[55vh]"
      >
        {" "}
        <Header title="Login" divStyle="md:hidden" style="text-center" />
        <div className="w-[90%] md:w-[70%]">
          <InputField
            label="Email"
            icon={"user"}
            type="email"
            name="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[90%] md:w-[70%]">
          <InputField
            label="Password"
            icon={"password"}
            type="password"
            name="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            href="/Login/request_password_reset"
            className="underline text-xs self-end"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" text="Login" style="w-48" />
      </form>
    </div>
  );
};

export default Login;
