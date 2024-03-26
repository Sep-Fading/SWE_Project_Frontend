"use client";
import { useState } from "react";
import InputField from "@/Components/InputField";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";

const Issue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };
  return (
    <div className="flex flex-col justify-evenly mx-[10%]">
      <Header title="Raise An Issue" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded h-[65vh] pt-1 min-h-[380px] shadow-md"
      >
        <div className="flex flex-col w-[80%]">
          <label htmlFor="title" className="mb-1 font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            className="pl-2 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
          />
        </div>
        <TextArea
          label="Description"
          placeholder="Enter description"
          value={description}
          handleChange={handleDescriptionChange}
        />
        <Button type="submit" text="Submit" style="w-[80%]" onClick={onClick} />
      </form>
    </div>
  );
};
export default Issue;
