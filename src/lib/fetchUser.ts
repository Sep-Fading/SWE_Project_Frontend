import axios from "axios";
import { User } from "@/types/User";

async function fetchUser(user_id: String): Promise<User> {
  try {
    const response = await axios.get<User>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/${user_id}/`,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch users: ", error);
    return {
      user_id: "",
      first_name: "",
      last_name: "",
      role: "",
      email: "",
      phone_number: "",
      address: "",
      zip_code: "",
      city: "",
      country: "",
      account_number: "",
      sort_code: "",
      tax_code: "",
    };
  }
}

export { fetchUser };
