import HomeCard from "@/Components/HomeCard";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 my-7">
      <HomeCard
        href="/Admin/view_users"
        image="/user_list.svg"
        text="View Users"
        layout="sm: w-[365px] col-span-2 place-self-center md:w-[520px]"
      />
      <HomeCard
        href="/Admin/add_user"
        image="/add_user.svg"
        text="Add User"
        layout="sm: w-[175px] place-self-end row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/Admin/resolve_issues"
        image="/request.svg"
        text="Resolve Issues"
        layout="sm: w-[175px] place-self-start row-start-2 md:w-[250px]"
      />
    </div>
  );
}
