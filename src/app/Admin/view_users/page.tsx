"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import SearchBar from "@/Components/SearchBar";
import Button from "@/Components/Button";
import UserInfoBox from "@/Components/UserInfoBox";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';


const ViewUsers = () => {
  // AUTH
  useProtectedRoute('ADMIN');

  const [search, setSearch] = useState<string>("");
  const headings = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Address",
    "Bank Details"
  ];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = () => {
    // Add logic here
  };
  return (
    <div className="flex flex-col justify-evenly mx-[10%]">
      <Header title="View Users" />
      <SearchBar
        placeholder="Search Claims"
        value={search}
        handleChange={handleSearch}
        divStyle="w-full mb-2"
      />
      <UserInfoBox
        headerName="John Doe"
        headerUser="Line Manager"
        headerId="220523675"
        firstName="John"
        lastName="Doe"
        email="johnDoe@email.com"
        phone="0123456789"
        address1="13 Lavender Avenue"
        address2="E1 9JP, London"
        address3="England"
        accountNum="321242131413"
        sortCode="43-65-87"
      />
      
    </div>
  );
};

export default ViewUsers;
