"use client";

import { useState, ChangeEvent } from "react";
import Header from "@/Components/Header";
import SearchBar from "@/Components/SearchBar";
import UserCard from "@/Components/UserCard";
import { User } from "@/types/User";

interface ViewUsersProps {
  users: User[]
  admin: boolean
}

const ViewUsers = ({ users, admin }: ViewUsersProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
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
        {users.map((user, index) => (
            <UserCard
              key={index}
              details={user}
              admin={admin}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default ViewUsers;
