import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeCardProps {
  href: string;
  image: string;
  text: string;
  layout: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ href, image, text, layout }) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-2 bg-fdm-gradient size-40 rounded-md drop-shadow-lg text-white ${layout}`}
    >
      <Image src={image} alt="Link" width={55} height={35} priority />
      <h1>{text}</h1>
    </Link>
  );
};

export default HomeCard;
