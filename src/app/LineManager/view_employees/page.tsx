import { getData } from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function EmployeeList(){
  const users: User[] = await getData("user-info"); //change specifier

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={users} admin={false}/>
    </div>
  );
};
