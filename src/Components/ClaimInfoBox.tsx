// Imports the button element
import Button from "./Button";

interface ClaimInfoBoxProps {
  headingText: string[];
  buttonText: string[];
}

// The ClaimInfoBox element takes the headings and the text in the buttons as props as arrays - the data inside of these arrays are mapped into HTML elements (buttons and headings)
const ClaimInfoBox = ({ headingText, buttonText }: ClaimInfoBoxProps) => {
  return (
    <div className="flex flex-col shadow-lg rounded-md bg-[#D9D9D9] p-3 md:flex-row md:justify-between">
      <div className="flex flex-col justify-evenly">
        {headingText.map((heading, index) => (
          <h2 key={index}>{heading} :</h2>
        ))}
      </div>
      <div className="flex flex-col justify-evenly items-center md:items-start">
        {buttonText.map((text, index) => (
          <Button key={index} text={text} style="w-[200px]" />
        ))}
      </div>
    </div>
  );
};
export default ClaimInfoBox;
