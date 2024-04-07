import Button from "./Button";
import Header from "./Header";
import InfoHeader from "./InfoHeader";

interface UserInfoBoxProps {
  headerName: string;
  headerUser: string;
  headerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  address3: string;
  accountNum: string;
  sortCode: string;
}

const UserInfoBox = ({ headerName, headerUser, headerId, firstName, lastName, email, phone, address1, address2, address3, accountNum, sortCode}: UserInfoBoxProps) => {
  const onClick = () => {
    // Add logic here
  };
  return (
    <div className="bg-[#D9D9D9] justify-between p-[0.5rem] border-2 border-black rounded-md min-w-[350px]">
      <div className=" justify-evenly mx-[3%] text-lg">
        <InfoHeader name={headerName} user={headerUser} id={headerId}/>
        <div className="flex flex-row text-base justify-between mt-[1%]">
          <div className="flex flex-col">
            <h2 className="font-semibold">First Name</h2>
            <h3>{firstName}</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Last Name</h2>
            <h3>{lastName}</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Email</h2>
            <h3>{email}</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Phone</h2>
            <h3>{phone}</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Address</h2>
            <h3>{address1}</h3>
            <h3>{address2}</h3>
            <h3>{address3}</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Bank Details</h2>
            <h3>Account Number: {accountNum}</h3>
            <h3>Sort Code: {sortCode}</h3>
          </div>
        </div>
        <Button
        type="submit"
        text="Update User Details"
        style="w-[20%]"
        onClick={onClick}
        />
      </div>
    </div>
  );
};
export default UserInfoBox;
