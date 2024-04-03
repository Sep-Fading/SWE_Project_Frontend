import HomeCard from "@/Components/HomeCard";

export default function Home() {

  return (
    <div className="grid grid-cols-2 gap-4 my-7">
      <HomeCard
        href="/new_claim"
        image="/add.svg"
        text="New Claim"
        layout="sm: w-[365px] col-span-2 place-self-center md:w-[520px]"
      />
      <HomeCard
        href="/view_claims"
        image="/list.svg"
        text="View Claims"
        layout="sm: w-[175px] place-self-end row-start-2 md:w-[250px]"
      />
      <HomeCard
        href="/raise_issue"
        image="/request.svg"
        text="Request Help"
        layout=" sm: w-[175px] place-self-start row-start-2 md:w-[250px]"
      />
    </div>
  );
}
