interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
  style?: string;
}

const Button = ({ onClick, text, type, style }: ButtonProps) => {
  return (
    <button
      className={`my-2 rounded-sm text-center bg-fdm-gradient text-white h-[40px] duration-200 hover:shadow-lg ${style}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
