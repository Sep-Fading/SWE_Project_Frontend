import Image from "next/image";
import Navigation from "@/Components/Navigation";
import HomeCard from "@/Components/HomeCard";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 p-10">
        <HomeCard
          href="/new_claim"
          image="/new.svg"
          text="New Claim"
          layout="place-self-end"
        />
        <HomeCard
          href="/edit_claim"
          image="/edit.svg"
          text="Edit Claim"
          layout="place-self-start"
        />
        <HomeCard
          href="/view_claims"
          image="/view.svg"
          text="View Claims"
          layout="place-self-end"
        />
        <HomeCard
          href="/request_help"
          image="/request.svg"
          text="Request Help"
          layout="place-self-start"
        />
      </div>
    </div>
  );
}
