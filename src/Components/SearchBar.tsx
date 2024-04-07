import Image from "next/image";

interface SearchBarProps {
  divStyle?: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  divStyle,
  placeholder,
  value,
  handleChange,
}: SearchBarProps) => {
  return (
    <div className={`relative ${divStyle}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="rounded-md w-full py-2 pl-2 pr-10 shadow-md"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <Image src={`/search.svg`} alt="Search" width={28} height={28} />
      </div>
    </div>
  );
};
export default SearchBar;
