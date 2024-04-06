"use client";

import HomeCard from "@/Components/HomeCard";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../useProtectedRoute';

export default function Home() {
  //AUTH
  useProtectedRoute('FINANCE');

  return (
    <div className="flex flex-col items-center gap-4 my-7 md:grid md:grid-cols-2">
      <HomeCard
        href="/Finance/pending_claims"
        image="/approve.svg"
        text="Process Claims"
        layout="w-[90%] min-w-44 md:col-span-2 md:place-self-center md:w-[520px]"
      />
      <HomeCard
        href="/Finance/processed_claims"
        image="/list.svg"
        text="Processed Claims"
        layout="w-[90%] min-w-44 md:place-self-end md:row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/request_help"
        image="/request.svg"
        text="Request Help"
        layout="w-[90%] min-w-44 md:place-self-start md:row-start-2 md:w-[250px]"
      />
    </div>
  );
}
