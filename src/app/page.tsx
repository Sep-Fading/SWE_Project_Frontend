import HomeCard from "@/Components/HomeCard";

export default function Home() {

  return (
    <div className="grid grid-cols-2 gap-4 my-7">
      <HomeCard
        href="/new_claim"
        image="/add.svg"
        text="New Claim"
        layout="col-span-2 place-self-center w-[520px]"
      />
      <HomeCard
        href="/view_claims"
        image="/list.svg"
        text="View Claims"
        layout="place-self-end row-start-2 w-[250px]"
      />
      <HomeCard
        href="/request_help"
        image="/request.svg"
        text="Request Help"
        layout="place-self-start row-start-2 w-[250px]"
      />
    </div>
  );
}
