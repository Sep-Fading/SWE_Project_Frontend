import Image from "next/image";
import Navigation from "@/Components/Navigation";
import HomeCard from "@/Components/HomeCard";

export default function Home() {
  const links = [
    { title: "Pending", href: "/pending-claims" },
    { title: "Approved", href: "/approved-claims" },
    { title: "Rejected", href: "/rejected-claims" },
  ];
  return (
    <div>
      <Navigation links={links} />
    </div>
  );
}
