"use client";
import HomeCard from "@/Components/HomeCard";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../useProtectedRoute';

export default function Home() {
    // AUTH
    useProtectedRoute('ADMIN');

    return (
    <div className="flex flex-col items-center gap-4 my-7 md:grid md:grid-cols-2">
      <HomeCard
        href="/Admin/view_users"
        image="/user_list.svg"
        text="View Users"
        layout="w-[90%] min-w-44 md:col-span-2 md:place-self-center md:w-[520px]"
      />
      <HomeCard
        href="localhost8000/"
        image="/admin_panel.svg"
        text="Admin Panel"
        layout="w-[90%] min-w-44 md:place-self-end md:row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/Admin/resolve_issues"
        image="/request.svg"
        text="Resolve Issues"
        layout="w-[90%] min-w-44 md:place-self-start md:row-start-2 md:w-[250px]"
      />
    </div>
    );
}
