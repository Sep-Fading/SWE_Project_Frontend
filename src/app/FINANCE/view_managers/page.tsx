import { fetchUsers } from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function ManagerList(){
  const users: User[] = await fetchUsers("user-info"); //change specifier

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={users} admin={false}/>
    </div>
  );
};
