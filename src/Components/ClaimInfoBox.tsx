import React from "react";
import Button from "./Button";

const ClaimInfoBox: React.FC = () => {
  const headingsData = [
    { title: "Claim Date: " },
    { title: "Claim Amount: " },
    { title: "Employee Claiming: " },
    { title: "Uploaded Files: " },
  ];

  return (
    <div className="flex flex-row justify-between p-[0.5rem] border-2 border-black rounded-md min-w-[350px]">
      <div className="flex flex-col justify-evenly">
        {headingsData.map((heading, index) => (
          <h2 key={index}>{heading.title}</h2>
        ))}
      </div>

      <div className="flex flex-col justify-evenly">
        <Button text="Approve Claim" />
        <Button text="Reject Claim" />
        <Button text="View Description" />
      </div>
    </div>
  );
};
export default ClaimInfoBox;
