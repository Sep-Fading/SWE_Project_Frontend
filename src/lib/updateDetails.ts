import axios from "axios";

interface Details {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  tax_code: string;
}

interface Address {
  address: string;
  zip_code: string;
  city: string;
  country: string;
}

interface BankDetails {
  account_number: string;
  sort_code: string;
}

interface Password {
  password: string;
  confirmPassword: string;
}

type UpdateDetailsType = Details | Address | BankDetails | Password;

async function updateDetails(user_id: string, details: UpdateDetailsType) {
  console.log("details: ", details);
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/update/${user_id}/`,
      details,
      { withCredentials: true }
    );

    console.log("response: ", response);
  } catch (error) {
    console.error("Failed to fetch users: ", error);
  }
}

export { updateDetails };
