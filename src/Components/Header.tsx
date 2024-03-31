interface HeaderProps {
  title: string;
  style?: string;
  hrStyle?: string;
}

const Header = ({ title, style, hrStyle }: HeaderProps) => {
  return (
    <header className="mb-5 mt-8">
      <h1 className={`text-2xl text-blue ${style}`}>{title}</h1>
      <hr className={`border-3 border-black w-[15rem] ${hrStyle}`} />
    </header>
  );
};

export default Header;
