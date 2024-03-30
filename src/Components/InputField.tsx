import { ChangeEvent } from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  name: string;
  icon?: String;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  icon,
  type,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="mb-1 font-medium">
        {label}
      </label>
      {icon ? (
        <Image
          src={`/${icon}.svg`}
          alt="Login"
          width={35}
          height={35}
          className="absolute my-9 w-5 ml-3"
        />
      ) : null}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${
          icon ? "pl-9" : "pl-2"
        } border-2 border-b-4 border-black rounded-sm shadow-sm py-1`}
        required
      />
    </div>
  );
};

export default InputField;
