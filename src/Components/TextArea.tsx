import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col w-[80%]">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-2 py-1 border-2 border-b-4 border-black rounded-sm shadow min-h-[150px] max-h-[210px]"
      />
    </div>
  );
};

export default InputField;
