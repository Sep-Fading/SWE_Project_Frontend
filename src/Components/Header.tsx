import React from "react";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mx-[15rem] mt-[2rem]">
      <h1 className="text-2xl text-blue">{title}</h1>
      <hr className="border-3 border-black w-[15rem]" />
    </header>
  );
};

export default Header;
