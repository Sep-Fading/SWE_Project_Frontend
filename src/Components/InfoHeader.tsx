interface InfoHeaderProps {
    name: string;
    user: string;
    id: string;
    style?: string;
    hrStyle?: string;
  }
  
  const Header = ({ name, user, id, style, hrStyle }: InfoHeaderProps) => {
    return (
      <div>
      <div className="flex justify-between">
        <h2 className="text-xl">{name}</h2>
        <h1 className="text-xl font-semibold">{user}</h1>
        <h2 className="text-xl">{id}</h2>
      </div>
      <hr className="border-3 border-black"></hr>
      </div>
    );
  };
  
  export default Header;
  