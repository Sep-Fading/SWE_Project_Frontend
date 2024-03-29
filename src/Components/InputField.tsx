import { ChangeEvent } from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  icon: String;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputField = ({
  label,
  icon,
  type,
  value,
  placeholder,
  onChange,
  name,
}: InputProps) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="mb-1 font-medium">
        {label}
      </label>
      <Image
        src={`/${icon}.svg`}
        alt="Login"
        width={35}
        height={35}
        className="absolute my-9 w-5 ml-3"
      />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-9 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
        required
      />
    </div>
  );
};

export default InputField;
