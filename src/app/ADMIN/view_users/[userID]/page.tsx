import Image from "next/image";
import { FormEvent } from "react";
import Link from "next/link";
import UpdateUserDetails from "@/Components/UpdateUser";
import { getData } from "@/lib/fetchUser";
import { updateDetails } from "@/lib/updateDetails";
import { flagPassword } from "@/lib/flagPassword";
import formatRole from "@/lib/formatRole";

export default async function Post({ params }: { params: { userID: string } }) {
  const details = await getData("user-info", params.userID);

  const onClick = () => {
    // Add your login logic here
  };

  return (
    <div className="bg-gray-100 md:p-[5%]">
      <div className="bg-white shadow-md rounded p-[20px]">
        <Link href="/ADMIN/view_users">
          <Image src="/back.svg" alt="Back" width={26} height={26} className="mb-2"/>
        </Link>
        <div className="flex justify-between">
          <h2 className="text-xl">{details ? (details.first_name + " " + details.last_name) : "User Name"}</h2>
          <h1 className="text-xl font-semibold">{details ? (formatRole(details.role)) : "User Role"}</h1>
          <h2 className="text-xl">{details ? (details.user_id) : "User ID"}</h2>
        </div>
        <hr className="border-3 border-black"></hr>
        <UpdateUserDetails details={details}/>
      </div>
    </div>
  );
};
