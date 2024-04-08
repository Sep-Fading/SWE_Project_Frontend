interface HeaderProps {
  title: string;
  divStyle?: string;
  style?: string;
}

// The header component takes title and style props but the style is not required

// A header is an h1 element with an hr element

const Header = ({ title, divStyle, style }: HeaderProps) => {
  return (
    <header className={`md:mb-5 md:mt-5 ${divStyle}`}>
      <h1 className={`text-3xl text-blue  ${style}`}>{title}</h1>
    </header>
  );
};

export default Header;
