"use client";
// Imports the button element
import Button from "./Button";
import {useState} from "react";
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
const IssueBox = ({ title, user, description, buttonText, date }: IssueBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded px-2 py-3 hover:scale-[1.01] transition-transform duration-300 hover:shadow w-full px-5 pt-5">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <h2 className="font-bold text-xl md:text-2xl">{user}: {title}</h2>
                <h3 className="text-gray-500 text-left">{date}</h3>
            </div>
            <div className="flex flex-row justify-end">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src={`/${isOpen ? "drop_up" : "drop_down"}.svg`}
                    alt="Arrow"
                    width={24}
                    height={24}
                />
            </button>

            </div>
        </div>
            
        <div className={`${isOpen ? "" : "hidden"} mt-4 text-gray-600`}>
            <p className="text-left">{description}</p>
            <div className="flex flex-row justify-end hover:scale-[1.005]">
                <Button text={buttonText[0]} style="w-[200px] "/>
            </div>
        </div>

    </div>
  );
};
export default IssueBox;
