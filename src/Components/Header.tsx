import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-5 mt-8">
      <h1 className="text-2xl text-blue">{title}</h1>
      <hr className="border-3 border-black w-[15rem]" />
    </header>
  );
};

export default Header;
