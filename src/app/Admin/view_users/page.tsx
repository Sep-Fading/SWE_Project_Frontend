"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import SearchBar from "@/Components/SearchBar";
import Button from "@/Components/Button";
import UserInfoBox from "@/Components/UserInfoBox";

const ViewUsers = () => {
  const [search, setSearch] = useState<string>("");
  const headings = [
    "First Name",
    "Last Name",
    "Email",
    "Address",
    "Bank Details",
  ];
  const group = ["Account Number", "Sort Code"];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = () => {
    // Add logic here
  };
  return (
    <div className="flex flex-col justify-evenly mx-[10%]">
      <Header title="Update Details" />
      <SearchBar
        placeholder="Search Claims"
        value={search}
        handleChange={handleSearch}
        divStyle="w-full mb-2"
      />
      <UserInfoBox
        headerName=""
        headerUser="Line Manager"
        headerId=""
        headingText={headings}
        groupText={group}
      />
      <Button
        type="submit"
        text="Update User Details"
        style="w-[20%]"
        onClick={onClick}
      />
    </div>
  );
};

export default ViewUsers;
