import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField = ({
  label,
  value,
  placeholder,
  handleChange,
}: InputProps) => {
  return (
    <div className="flex flex-col w-[80%]">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-2 py-1 border-2 border-b-4 border-black rounded-sm shadow min-h-[150px] max-h-[210px]"
      />
    </div>
  );
};

export default InputField;
