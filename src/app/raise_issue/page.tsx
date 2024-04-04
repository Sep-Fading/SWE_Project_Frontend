"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import InputField from "@/Components/InputField";

interface FormData {
  title: string;
  description: string;
}

const Issue = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  const onClick = () => {
    // Add your login logic here
  };
  return (
    <div className="flex flex-col  my-[25%] md:my-0 md:mx-[15%]">
      <Header title="Raise An Issue" divStyle="hidden md:inline" />
      <form
        onSubmit={handleSubmit}
        className="bg-[#D9D9D9] flex flex-col justify-evenly items-center rounded h-[55vh] pt-1 min-h-[380px] shadow-md"
      >
        <Header
          title="Raise An Issue"
          divStyle="md:hidden"
          style="text-center"
          hrStyle="hidden"
        />
        <div className="w-[90%] md:w-[80%]">
          <InputField
            label="Title"
            name="title"
            type="text"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <TextArea
          label="Description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button type="submit" text="Submit" style="w-[80%]" onClick={onClick} />
      </form>
    </div>
  );
};
export default Issue;
