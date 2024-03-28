import HomeCard from "@/Components/HomeCard";

export default function Home() {

  return (
    <div className="grid grid-cols-2 gap-4 my-7">
      <HomeCard
        href="/Admin/view_users"
        image="/view.svg"
        text="View Users"
        layout="col-span-2 place-self-center w-[520px]"
      />
      <HomeCard
        href="/Admin/add_user"
        image="/user-fill.svg"
        text="Add User"
        layout="place-self-end row-start-2 w-[250px]"
      />
      <HomeCard
        href="/Admin/resolve_issues"
        image="/request.svg"
        text="Resolve Issues"
        layout="place-self-start row-start-2 w-[250px]"
      />
    </div>
  );
}
