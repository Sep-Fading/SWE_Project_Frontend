interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
  style?: string;
}

const Button = ({ onClick, text, type, style }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg text-center bg-fdm-gradient text-white p-[6px] hover:scale-[1.01] transition-transform duration-300 hover:shadow-md ${style}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
