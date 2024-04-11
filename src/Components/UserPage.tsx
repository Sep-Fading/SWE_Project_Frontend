"use client";

import { useState } from "react";
import Button from "@/Components/Button";
import Image from "next/image";
import PieChart from "@/Components/PieChart";
import LineChart from "@/Components/LineChart";
import Cookies from "js-cookie";
import { User } from "@/types/User";
import formatRole from "@/lib/formatRole";
import { useRouter } from "next/navigation";

interface UserPageProps {
  user: User;
}

const UserPage = ({
  user: {
    user_id,
    first_name,
    last_name,
    role,
    email,
    address,
    zip_code,
    city,
    country,
    phone_number,
    tax_code,
    account_number,
    sort_code,
  },
}: UserPageProps) => {
  const router = useRouter();

  const handLogout = () => {
    Cookies.remove("userRole");
    Cookies.remove("userID");
    Cookies.remove("flagged_password_change");
    router.push("/Login");
  };

  const [categories, setCategories] = useState([
    "Travel",
    "Meal",
    "Night Stay",
    "Gift",
  ]);
  const [expenses, setExpenses] = useState([300, 50, 100, 150]);
  const [months, setMonths] = useState([
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);
  const [monthlyExpenses, setMonthlyExpenses] = useState([
    65, 59, 80, 159, 56, 55, 40, 34, 430, 100,
  ]);
  return (
    <>
      <div className="bg-white shadow-lg rounded md:col-span-2 px-4 py-2">
        <div className="flex justify-between">
          <h2 className="text-xl">
            {first_name} {last_name}
          </h2>
          <h1 className="text-xl font-semibold">{formatRole(role)}</h1>
          <h2 className="text-xl">{user_id}</h2>
        </div>
        <hr className="border-3 border-black"></hr>
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>{first_name}</p>
            <h2 className="font-medium">Last Name</h2>
            <p>{last_name}</p>
          </div>
          <div>
            <h2 className="font-medium">Email</h2>
            <p>{email}</p>
            <h2 className="font-medium">Address</h2>
            <p>
              {address}, {zip_code}, {city}, {country}
            </p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>{phone_number}</p>
            <h2 className="font-medium">Tax Code</h2>
            <p>{tax_code}</p>
          </div>
          <div>
            <h2 className="font-medium">Bank Details</h2>
            <h3 className="font-bold text-xs">Account Number</h3>
            <p>{account_number}</p>
            <h3 className="font-bold text-xs">Sort Code</h3>
            <p>{sort_code}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-lg px-3 py-2 rounded-lg md:h-[480px]">
        <div className="flex">
          <h1 className="text-lg font-medium">
            Expenses Breakdown - April 2024
          </h1>
          <Image src="/expand.svg" alt="chart" width={24} height={24} />
        </div>
        <div className="min-h-52 md:grow">
          <PieChart labels={categories} data={expenses} />
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-lg px-3 py-2 rounded-lg h-[480px]">
        <div className="flex">
          <h1 className="text-lg font-medium">Monthly Expenses</h1>
          <Image src="/expand.svg" alt="chart" width={24} height={24} />
        </div>
        <div className="grow">
          <LineChart labels={months} data={monthlyExpenses} />
        </div>
      </div>
      <Button onClick={handLogout} text="Logout" style="w-full col-span-2" />
    </>
  );
};

export default UserPage;
