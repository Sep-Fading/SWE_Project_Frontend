"use client";

import { useState, ChangeEvent, FormEvent } from "react";
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

const LoginPage = () => {

    // Sepehr - Backend Integration.
    // For Role-based routing.
    const router = useRouter();
    const { setUserPermission } = useAuth();

    // Calling the accounts model API 
    const Login = async (email: string, password: string): Promise<string> => {
            const response = await fetch('http://localhost:8000/accounts/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            localStorage.clear();
            const data = await response.json();
            const expiryTime = new Date().getTime() + (30*60*1000); // 30 Minutes Expiry time.
            localStorage.setItem('token', data.access);
            localStorage.setItem('tokenExpiry', expiryTime.toString());
            localStorage.setItem('userPermission', data.user_permission);
            setUserPermission(data.user_permission);
            return data.user_permission;
        }
        else {
            throw new Error('Failed to login');
        }
    };

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
    
    // Calling the API with our login details.
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login logic here
        const email = (event.currentTarget.elements.namedItem(
            'email') as HTMLInputElement).value;
        const password = (event.currentTarget.elements.namedItem(
            'password') as HTMLInputElement).value;

        try {
            const userPermission = await Login(email, password);
            switch (userPermission) {
                case 'EMPLOYEE':
                    router.push('/new_claim');
                    break;
                case 'FINANCE':
                    router.push('/Finance');
                    break;
                case 'LINEMANAGER':
                    router.push('/LineManager');
                    break;
                case 'ADMIN':
                    router.push('/Admin');
                    break;
                // MORE CASES HERE FOR ADMIN/ LINE MANAGER.
                default:
                    console.error('Permission Denied');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
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
