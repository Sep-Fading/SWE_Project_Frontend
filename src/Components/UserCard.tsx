import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface UserCardProps {
  userDetails: {
    firstName: string;
    lastName: string;
    role: string;
    userID: string;
    email: string;
    phoneNumber: string;
    address: string;
    accountNumber: string;
    sortCode: string;
    taxCode: string;
    admin: boolean;
  };
}

const UserCard = ({ userDetails}: UserCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded hover:scale-[1.01] transition-transform duration-300 hover:shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 py-3 w-full"
      >
        <div className="flex justify-between grow">
          <h2 className="text-xl">
            {userDetails.firstName} {userDetails.lastName}
          </h2>
          <h1 className="text-xl font-semibold">{userDetails.role}</h1>
          <h2 className="text-xl">{userDetails.userID}</h2>
        </div>
        <Image
          src={`/${isOpen ? "drop_up" : "drop_down"}.svg`}
          alt="Arrow"
          width={26}
          height={26}
          className="ml-1"
        />
      </button>
      <div className={`${isOpen ? "" : "hidden"} flex flex-col mb-3 mx-2`}>
        <div className="flex justify-between text-left mt-1 py-3 overflow-y-auto gap-4 whitespace-nowrap">
          <div>
            <h2 className="font-medium">First Name</h2>
            <p>{userDetails.firstName}</p>
            <h2 className="font-medium">Last Name</h2>
            <p>{userDetails.lastName}</p>
          </div>
          <div>
            <h2 className="font-medium">Email</h2>
            <p>{userDetails.email}</p>
            <h2 className="font-medium">Address</h2>
            <p>{userDetails.address}</p>
          </div>
          <div>
            <h2 className="font-medium">Phone Number</h2>
            <p>{userDetails.phoneNumber}</p>
            <h2 className="font-medium">Tax Code</h2>
            <p>{userDetails.taxCode}</p>
          </div>
          <div>
            <h2 className="font-medium">Bank Details</h2>
            <h3 className="font-bold text-xs">Account Number</h3>
            <p>{userDetails.accountNumber}</p>
            <h3 className="font-bold text-xs">Sort Code</h3>
            <p>{userDetails.sortCode}</p>
          </div>
        </div>
        {userDetails.admin && (
          <Link
            href={`/Admin/view_users/${userDetails.userID}`}
            className="py-1 rounded-lg text-center bg-fdm-gradient text-white hover:scale-[1.005] transition-transform duration-300 hover:shadow w-full"
            passHref
          >
            Update Details
          </Link>
        )}
      </div>
    </div>
  );
};
export default UserCard;
