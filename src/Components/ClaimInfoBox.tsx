import Button from "./Button";

interface ClaimInfoBoxProps {
  headingText: string[];
  buttonText: string[];
}

const ClaimInfoBox = ({ headingText, buttonText }: ClaimInfoBoxProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-evenly">
        {headingText.map((heading, index) => (
          <h2 key={index}>{heading} :</h2>
        ))}
      </div>
      <div className="flex flex-col justify-evenly">
        {buttonText.map((text, index) => (
          <Button key={index} text={text} style="w-[200px]" />
        ))}
      </div>
    </div>
  );
};
export default ClaimInfoBox;
