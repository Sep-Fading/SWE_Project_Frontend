import UserPage from "@/Components/UserPage";
import { fetchUser } from "@/lib/fetchUser";

export default async function User({ params }: { params: { userID: string } }) {
  const user = await fetchUser(params.userID);

  return (
    <div className="bg-gray-200 flex flex-col md:grid md:grid-cols-2 gap-3 p-3">
      <UserPage user={user} />
    </div>
  );
};
