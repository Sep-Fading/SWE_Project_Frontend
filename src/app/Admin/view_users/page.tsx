import { useState, useEffect, ChangeEvent } from "react";
import {getData} from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function UserList() {
  const users: User[] = await getData();

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={users} />
    </div>
  );
};
