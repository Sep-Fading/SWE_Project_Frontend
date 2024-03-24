"use client";

import { useState } from "react";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <InputField
        label="Email"
        icon={"user"}
        type="email"
        placeholder="Type your email"
        value={email}
        handleChange={handleEmailChange}
      />
      <InputField
        label="Password"
        icon={"password"}
        type="password"
        placeholder="Type your password"
        value={email}
        handleChange={handleEmailChange}
      />
        <Button type="submit" text="Login" onClick={onClick}/>
      </form>
    </div>
  );
};

export default Login;
