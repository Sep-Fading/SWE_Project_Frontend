"use client";
import { useState } from "react";
import InputField from "@/Components/InputField";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import SearchBar from "@/Components/SearchBar"
import UserInfoBox from "@/Components/UserInfoBox";
import InfoHeader from "@/Components/InfoHeader";

const updateDetails = () => {
  const header = "User Details";
  const headings = ["First Name", "Last Name", "Email", "Address", "Bank Details"];
  const group = ["Account Number", "Sort Code"]
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  const onClick = () => {
    // Add logic here
  };
  return (
    <div className="flex flex-col justify-evenly mx-[10%]">
      <Header title="Update Details" />
      <div className="mb-[1%]">
        <SearchBar
          label = "Search for User"
          icon = {"searchicon"}
          placeholder = "Enter Users ID"
          value = {searchInput}
          handleChange = {handleSearchInput}
        />
      </div>
      <UserInfoBox
        headerName=""
        headerUser="Line Manager"
        headerId=""
        headingText={headings}
        groupText={group}
      />
      <Button type="submit" text="Update User Details" style="w-[20%]" onClick={onClick} />
    </div>
  )
};
export default updateDetails;
