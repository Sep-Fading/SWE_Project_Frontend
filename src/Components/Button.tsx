import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="my-2 rounded-sm text-center bg-fdm-gradient text-white w-[200px] h-[35px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
