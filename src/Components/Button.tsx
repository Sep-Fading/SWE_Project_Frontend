interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
}

const Button = ({ onClick, text, type }: ButtonProps) => {
  return (
    <button
      className="my-2 rounded-sm text-center bg-fdm-gradient text-white w-[200px] h-[40px]"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
