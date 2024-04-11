import { fetchUsers } from "@/lib/fetchUsers";
import ViewUsers from "@/Components/ViewUsers";
import { User } from "@/types/User";

export default async function ManagerList(){
  const users: User[] = await fetchUsers("managers-info"); //change specifier

  const dummyUsers: User[] = [
    {
      user_id: "2",
      first_name: "Mathis",
      last_name: "Weil",
      email: "lineManager@email.com",
      role: "Line Manager",
      manager_id: "4",
      phone_number: "1234567890",
      address: "1234 Street",
      zip_code: "12345",
      city: "City",
      country: "Country",
      account_number: "12345678",
      sort_code: "123456",
      tax_code: "123456",
    },
    {
      user_id: "3",
      first_name: "Owen",
      last_name: "Houpeurt",
      email: "lineManager@email.com",
      role: "Line Manager",
      manager_id: "4",
      phone_number: "1234567890",
      address: "1234 Street",
      zip_code: "12345",
      city: "City",
      country: "Country",
      account_number: "12345678",
      sort_code: "123456",
      tax_code: "123456",
    },
    {
      user_id: "4",
      first_name: "Arsen",
      last_name: "Zholanov",
      email: "lineManager@email.com",
      role: "Line Manager",
      manager_id: "4",
      phone_number: "1234567890",
      address: "1234 Street",
      zip_code: "12345",
      city: "City",
      country: "Country",
      account_number: "12345678",
      sort_code: "123456",
      tax_code: "123456",
    },
    {
      user_id: "5",
      first_name: "Alex",
      last_name: "Mesbah",
      email: "lineManager@email.com",
      role: "Line Manager",
      manager_id: "4",
      phone_number: "1234567890",
      address: "1234 Street",
      zip_code: "12345",
      city: "City",
      country: "Country",
      account_number: "12345678",
      sort_code: "123456",
      tax_code: "123456",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <ViewUsers users={dummyUsers} admin={false}/>
    </div>
  );
};
