import { fetchUsers } from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function EmployeeList({ params }: { params: { userID: string } }){
  const users: User[] = await fetchUsers("employees-info", params.userID); //change specifier

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={users} admin={false}/>
    </div>
  );
};
