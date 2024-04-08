"use client";
// Imports the button element
import Button from "./Button";
import { useState } from "react";
import Image from "next/image";

interface IssueBoxProps {
  buttonText: string[];
  user: string;
  title: string;
  description: string;
  date: string;
}

// The IssueBox component takes the headings and the text in the buttons as props as arrays - the data inside of these arrays are mapped into HTML elements (buttons and headings)
// Date is also taken as a prop, as a string
const IssueBox = ({
  title,
  user,
  description,
  buttonText,
  date,
}: IssueBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded hover:scale-[1.01] transition-transform duration-300 hover:shadow w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between px-4 py-2 cursor-pointer"
      >
        <div className="flex flex-col">
          <h2 className="font-medium text-lg">
            {user}: {title}
          </h2>
          <h3 className="text-gray-500 text-left">{date}</h3>
        </div>
        <div className="flex flex-row justify-end">
          <Image
            src={`/${isOpen ? "drop_up" : "drop_down"}.svg`}
            alt="Arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} flex flex-col gap-2 px-4 pb-2 text-gray-600`}>
        <p className="text-left">{description}</p>
        <Button text={buttonText[0]} style="w-[200px] self-end" />
      </div>
    </div>
  );
};
export default IssueBox;
