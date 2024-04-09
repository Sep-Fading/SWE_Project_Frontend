import axios from "axios";
import { User } from "@/types/User";

async function getData(specifier: string) {
  try {
    const response = await axios.get<User[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/${specifier}/`,
      { withCredentials: true }
    );
    console.log("response.data: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users: ", error);
    return [];
  }
}

export { getData };
