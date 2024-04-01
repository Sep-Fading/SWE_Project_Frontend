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
      className={`flex flex-col items-center justify-center gap-3 bg-fdm-gradient size-[210px] rounded-md shadow-3xl hover:scale-105 transition-transform duration-300 text-white ${layout}`}
    >
      <Image src={image} alt={text} width={65} height={65} priority />
      <h1 className="font-semibold">{text}</h1>
    </Link>
  );
};

export default HomeCard;
