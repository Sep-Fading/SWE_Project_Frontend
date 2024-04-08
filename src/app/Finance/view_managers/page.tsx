"use client";

import { useState, ChangeEvent } from "react";
import Header from "@/Components/Header";
import SearchBar from "@/Components/SearchBar";
import UserCard from "@/Components/UserCard";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from '../../../useProtectedRoute';

interface User {
  title: string;
  user: string;
  description: string;
  date: string;
}

interface UsersData {
  users: User[];
}

const ViewUsers = () => {
  const [users, setUsers] = useState<UsersData>();

  // AUTH
  useProtectedRoute('FINANCE');

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
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
          <UserCard
            userDetails={{
                firstName: "John",
                lastName: "Doe",
                role: "Admin",
                userID: "user123",
                email: "johndoe@example.com",
                phoneNumber: "123-456-7890",
                address: "123 Main St, Anytown, AT 12345",
                accountNumber: "12345678",
                sortCode: "12-34-56",
                taxCode: "123456",
                admin: false
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default ViewUsers;
