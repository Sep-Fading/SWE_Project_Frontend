// Imports the button element
"use client";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

interface NotificationProps {
  title: string;
  description: string;
  date: string;
}

const Notification = ({
  title,
  description,
  date,
}: NotificationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
  };

  return (
    <div className={`${hide && "hidden"} bg-white rounded hover:scale-[1.01] transition-transform duration-300 hover:shadow w-full`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between px-4 py-2 cursor-pointer"
      >
        <div className="flex flex-col">
          <h2 className="font-medium text-lg">
            {title}
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
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex flex-col gap-2 px-4 pb-2 text-gray-600`}
      >
        <p className="text-left">{description}</p>
        <Button text="Delete" onClick={handleClick} style="w-[200px] self-end" />
      </div>
    </div>
  );
};
export default Notification;
