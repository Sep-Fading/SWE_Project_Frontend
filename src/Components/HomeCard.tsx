import Image from "next/image";
import Link from "next/link";

interface HomeCardProps {
  href: string;
  image: string;
  text: string;
  layout?: string;
}

const HomeCard = ({ href, image, text, layout }: HomeCardProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-3 bg-fdm-gradient size-[210px] rounded-md drop-shadow-lg text-white ${layout}`}
    >
      <Image src={image} alt="Link" width={65} height={65} priority />
      <h1>{text}</h1>
    </Link>
  );
};

export default HomeCard;
