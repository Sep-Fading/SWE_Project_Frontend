"use client";
import HomeCard from "@/Components/HomeCard";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-4 my-7 md:grid md:grid-cols-3">
      <HomeCard
        href="/EMPLOYEE/new_claim"
        image="/add.svg"
        text="New Claim"
        layout="w-[90%] min-w-44 md:col-span-2 md:place-self-center md:w-[520px]"
      />
      <HomeCard
        href="/EMPLOYEE/view_claims"
        image="/list.svg"
        text="View Claims"
        layout="w-[90%] min-w-44 md:place-self-end md:row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/EMPLOYEE/raise_issue"
        image="/request.svg"
        text="Request Help"
        layout="w-[90%] min-w-44 order-last md:place-self-start md:row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/LINEMANAGER/approve_claims"
        image="/checklist.svg"
        text="Review Claims"
        layout="w-[90%] min-w-44 md:place-self-start md:row-start-1 md:col-start-3 md:w-[250px]"
      />
      <HomeCard
        href="/LINEMANAGER/view_employees"
        image="/user_list.svg"
        text="View Employees"
        layout="w-[90%] min-w-44 md:place-self-start md:row-start-2 md:col-start-3 md:w-[250px]"
      />
    </div>
  );
}
