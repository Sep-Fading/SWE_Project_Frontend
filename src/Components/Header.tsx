interface HeaderProps {
  title: string;
  style?: string;
}

const Header = ({ title, style }: HeaderProps) => {
  return (
    <header className="mb-5 mt-8">
      <h1 className={`text-2xl text-blue ${style}`}>{title}</h1>
      <hr className="border-3 border-black w-[15rem]" />
    </header>
  );
};

export default Header;
