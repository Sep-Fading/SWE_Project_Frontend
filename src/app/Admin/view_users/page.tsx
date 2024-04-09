import { getData } from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function UserList() {
  const users: User[] = await getData("user-info");

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={users} admin={true}/>
    </div>
  );
}
