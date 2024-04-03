
interface HeaderProps {
  title: string;
  style?: string;
}

// The header component takes title and style props but the style is not required

// A header is an h1 element with an hr element

const Header = ({ title, style }: HeaderProps) => {
  return (
    <header className="mb-5 mt-8">
      <h1 className={`text-2xl text-blue ${style}`}>{title}</h1>
      <hr className="border-3 border-black w-[15rem]" />
    </header>
  );
};

export default Header;
