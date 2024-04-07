// Imports the button element
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

interface ClaimInfoBoxProps {
  buttonText: string[];
  employeeName: string;
  claimAmount: string;
  date?: string;
  type: string;
  description?: string;
  approvedBy?: string;
  buttonsNeededVal: boolean;
  showApprovedByVal: boolean;
  status: string;
}

// The ClaimInfoBox element takes the headings and the text in the buttons as props as arrays - the data inside of these arrays are mapped into HTML elements (buttons and headings)
const ClaimInfoBox = ({ buttonText, employeeName, claimAmount, date, type, description, approvedBy, buttonsNeededVal, showApprovedByVal, status}: ClaimInfoBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonsNeeded, setButtonsNeeded] = useState(true);
  const [showApprovedBy, setShowApprovedBy] = useState(false);
  

  return (
    <div className="bg-white rounded px-2 py-3 hover:scale-[1.01] transition-transform duration-300 hover:shadow w-full px-5 pt-5">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <Image
                src={`/${status}.svg`}
                alt={status}
                width={35}
                height={35}
                className="bg-gray-100 rounded-full p-1 mx-1"
              />
              <div className="flex flex-col">
                <h2 className="text-l">{employeeName}</h2>
                  <h2 className="text-l">{type}</h2>
                  <h3 className="text-gray-500 text-left text-sm">{date}</h3>
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <div className="flex flex-row items-center">
                <h2 className="text-xl">£{claimAmount}</h2>
                <button onClick={() => {setIsOpen(!isOpen); setButtonsNeeded(buttonsNeededVal); setShowApprovedBy(showApprovedByVal);}}>
                    <Image
                        src={`/${isOpen ? "drop_up" : "drop_down"}.svg`}
                        alt="Arrow"
                        width={24}
                        height={24}
                    />
                </button>

              </div>
            </div>
        </div>
            
        <div className={`${isOpen ? "" : "hidden"} mt-4 text-gray-600 ml-10 mr-6`}>

            <div className="flex flex-row justify-between">
              <h2>Claimed amount: </h2>
              <h2>£{claimAmount}</h2>
            </div>

            <div className="flex flex-row justify-between">
              <h2>Category: </h2>
              <h2>{type}</h2>
            </div>

            <div className="flex flex-row justify-between">
              <h2>Claimed on: </h2>
              <h2>{date}</h2>
            </div>

            <div className={`${showApprovedBy ? "" : "hidden"} flex flex-row justify-between`}>
              <h2>Approved By:</h2>
              <h2>{approvedBy}</h2>
            </div>

            <div className="flex flex-row justify-between">
              <h2>Files attached: </h2>
              <h2>*Link to file(s)*</h2>
            </div>

            <div>
              <h2>Description: </h2>
              <p className="mx-[2rem] mb-[2rem]">{description}</p>
            </div>

            <div className={`${buttonsNeeded ? "" : "hidden"} flex flex-row justify-evenly`}>
              {buttonText.map((text, index) => (
                <Button key={index} text={text} style="w-[200px] hover:scale-[1.01]" />
              ))}
            </div>

        </div>

    </div>
  );
};
export default ClaimInfoBox;
