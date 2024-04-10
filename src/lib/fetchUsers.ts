import axios from "axios";
import { User } from "@/types/User";

async function getData(specifier: string): Promise<User[]> {
  try {
    const response = await axios.get<User | User[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/${specifier}/`,
      { withCredentials: true }
    );

    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Failed to fetch users: ", error);
    return [];
  }
}

export { getData };
