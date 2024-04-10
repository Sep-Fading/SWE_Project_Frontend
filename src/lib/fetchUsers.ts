import axios from "axios";
import { User } from "@/types/User";

async function fetchUsers(specifier: string, user_id?: string): Promise<User[]> {
  try {
    // users, manangers, employees
    const response = await axios.get<User | User[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/${specifier}/${
        user_id ? user_id + "/" : ""
      }`,
      { withCredentials: true }
    );

    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Failed to fetch users: ", error);
    return [];
  }
}

export { fetchUsers };
