"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/Components/Header";
import SearchBar from "@/Components/SearchBar";
import UserCard from "@/Components/UserCard";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../../useProtectedRoute';
import axios from "axios";


interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    addess: string;
    phoneNumber: string;
    taxCode: string;
    accountNumber: string;
    sortCode: string;
}


const ViewUsers = () => {
  // AUTH
  useProtectedRoute('ADMIN');

    // BACKEND INTEGRATION:
    // Makes a call to the backend with a special api 
    // that returns all users' information.
    const [users, setUsers] = useState<UserDetails[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<UserData[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/`, { withCredentials: true});
                console.log(response.data);
                setUsers(response.data);
            }
            catch (error) {
                console.error('Failed to fetch users: ', error);
            }

        };

        fetchData();
    }, []);


        

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-gray-100 flex flex-col gap-2">
      <div className="flex flex-row gap-4 items-center justify-between">
        <Header title="Users" divStyle="hidden md:block md:ml-2" />
        <SearchBar
          placeholder="Search User"
          value={search}
          handleChange={handleSearch}
          divStyle="w-full mt-2 md:mt-0 md:w-[50%]"
        />
      </div>
      <main className="mx-2">
        <div className="flex flex-col gap-1 mb-2">
        {users.map((user,index)=>(
          <UserCard
            userDetails={{
                firstName: user.first_name,
                lastName: user.last_name,
                role: user.role,
                userID: user.user_id,
                email: user.email,
                phoneNumber: user.phone_number,
                address: user.address,
                accountNumber: user.account_number,
                sortCode: user.sort_code,
                taxCode: user.tax_code
            }}
          />
        ))}
        </div>
      </main>
    </div>
  );
};

export default ViewUsers;
