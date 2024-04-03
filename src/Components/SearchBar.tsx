import Image from "next/image";

interface SearchBarProps {
  label: string;
  icon: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  label,
  icon,
  placeholder,
  value,
  handleChange,
}: SearchBarProps) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={label} className="mb-1 font-medium">
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-2 border-2 border-b-4 border-black rounded-sm shadow-sm py-1"
      />
      <Image
        src={`/${icon}.svg`}
        alt="Login"
        width={35}
        height={35}
        className="absolute float-right my-9 w-5 place-self-end mr-3"
      />
    </div>
  );
};
export default SearchBar;