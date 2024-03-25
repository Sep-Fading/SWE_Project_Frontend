import Image from "next/image";

interface InputProps {
  label: string;
  icon: String;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  icon,
  type,
  value,
  placeholder,
  handleChange,
}: InputProps) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={label} className="mb-1">{label}</label>
      <Image
        src={`/${icon}.svg`}
        alt="Login"
        width={35}
        height={35}
        className="absolute my-9 w-5 ml-3"
      />
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-9 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
      />
    </div>
  );
};

export default InputField;
