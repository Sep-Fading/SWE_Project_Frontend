import Button from "./Button";
import Header from "./Header";
import InfoHeader from "./InfoHeader";

interface UserInfoBoxProps {
  headerName: string;
  headerUser: string;
  headerId: string;
  headingText: string[];
  groupText: string[];
}

const UserInfoBox = ({ headerName, headerUser, headerId, headingText, groupText }: UserInfoBoxProps) => {
  return (
    <div className="flex flex-row bg-[#D9D9D9] justify-between p-[0.5rem] border-2 border-black rounded-md min-w-[350px]">
      <div className="flex flex-col justify-evenly mx-[3%] mb-[3%] text-lg space-y-[5%]">
        <InfoHeader name={headerName} user={headerUser} id={headerId}/>
        {headingText.map((heading, index) => (
          <h2 key={index}>{heading}:</h2>
        ))}
        <div className="flex flex-row text-base justify-between">
          {groupText.map((group, index) =>(
            <h2 key={index}>{group}:</h2>
          ))
          }
        </div>
      </div>
    </div>
  );
};
export default UserInfoBox;
