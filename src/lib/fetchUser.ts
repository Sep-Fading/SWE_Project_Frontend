import axiosWithAuth from "./axiosWithAuth";
import { User } from "@/types/User";

async function getData(specifier: string, user_id: String): Promise<User> {
  try {
    const response = await axiosWithAuth.get<User>(`/accounts/api/${specifier}/${user_id}/`);
    console.log("response: ", response);
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

export { getData };
