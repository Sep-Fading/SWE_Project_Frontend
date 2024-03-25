import React from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  icon: String;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  label,
  icon,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="flex flex-col relative">
      <label className="mb-1">{label}</label>
      <Image
        src={`/${icon}.svg`}
        alt="Login"
        width={35}
        height={35}
        className="absolute my-9 w-5 ml-3"
      />
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-9 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
      />
    </div>
  );
};

export default InputField;
