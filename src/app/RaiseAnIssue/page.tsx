"use client";
import { useState } from "react";
import InputField from "@/Components/InputField";
import Header from "@/Components/Header";
import Button from "@/Components/Button"
import LargeInputField from "@/Components/LargeInputField";

const Issue = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div>
            <Header title="Raise An Issue" />
            <form onSubmit={handleSubmit}>
                <InputField
                label="Title"
                icon={""}
                type={"title"}
                placeholder="Enter title"
                value={title}
                handleChange={handleTitleChange}
                />
                <LargeInputField
                label="Description"
                icon={""}
                placeholder="Enter description"
                value={description}
                handleChange={handleDescriptionChange}
                />
                <Button type="submit" text="Submit" onClick={onClick}/>
            </form>
        </div>
    );
};
export default Issue;