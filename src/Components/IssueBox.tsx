// Imports the button element
import Button from "./Button";

interface IssueBoxProps {
  headingText: string[];
  buttonText: string[];
  date: string;
}



// The IssueBox component takes the headings and the text in the buttons as props as arrays - the data inside of these arrays are mapped into HTML elements (buttons and headings)
// Date is also taken as a prop, as a string
const IssueBox = ({ headingText, buttonText, date }: IssueBoxProps) => {
  return (
    <div className="w-auto min-w-44 bg-[#D9D9D9] shadow-lg rounded-md p-5 md:flex md:flex-row md:justify-between">
      <div className="items-center flex flex-col justify-evenly md:items-start">
        {headingText.map((heading, index) => (
          <h2 className='mb-3' key={index}>{heading} :</h2>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center md:items-start">
        <p className="text-blue text-l text-center">{date}</p>
        {buttonText.map((text, index) => (
          <Button key={index} text={text} style="w-[200px]" />
        ))}
      </div>
    </div>
  );
};
export default IssueBox;
