import HomeCard from "@/Components/HomeCard";

export default function Home() {

    return (
    <div className="flex flex-col items-center gap-4 my-7 md:grid md:grid-cols-2">
      <HomeCard
        href="/ADMIN/view_users"
        image="/user_list.svg"
        text="View Users"
        layout="w-[90%] min-w-44 md:col-span-2 md:place-self-center md:w-[520px]"
      />
      <HomeCard
        href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin`}
        image="/admin_panel.svg"
        text="Admin Panel"
        layout="w-[90%] min-w-44 md:place-self-end md:row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/ADMIN/resolve_issues"
        image="/request.svg"
        text="Resolve Issues"
        layout="w-[90%] min-w-44 md:place-self-start md:row-start-2 md:w-[250px]"
      />
    </div>
    );
}
