"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from '../../Components/AuthContext';
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Header from "@/Components/Header";
import Link from "next/link";


interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Successful login logic.
                const data = await response.json();
                console.log(data);
                localStorage.setItem('user_email', data.user_email);
                router.push(data.redirect_url || '/dashboard'); // Adjust based on backend.
            }
            else {
                const data = await response.json();
                alert(data.message);
            }
        }
        catch (error) {
            console.error(error);
            alert('Failed to log in');
        }
    };
    

   

    return (
    <div className="flex flex-col  my-[25%] md:my-0 md:mx-[20%]">
      <Header title="Login" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit} className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded w-full min-w-[400px] min-h-[350px] shadow-md h-[55vh]" > <Header
          title="Login"
          divStyle="md:hidden"
          style="text-center"
        />
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
            href="/Login/forgot_password"
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

export default LoginPage;
