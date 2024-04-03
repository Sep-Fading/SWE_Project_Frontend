interface InfoHeaderProps {
    name: string;
    user: string;
    id: string;
    style?: string;
    hrStyle?: string;
  }
  
  const Header = ({ name, user, id, style, hrStyle }: InfoHeaderProps) => {
    return (
      <header className="mb-5 mt-8">
        <h1 className={`flex flex-row justify-between text-2xl text-blue space-x-30 ${style}`}>{name}{user}{id}</h1>
        <hr className={`border-3 border-black w-[15rem] ${hrStyle}`} />
      </header>
    );
  };
  
  export default Header;
  