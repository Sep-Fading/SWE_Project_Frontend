import Image from "next/image";
import Link from "next/link";

interface Link {
  title: string;
  href: string;
}

interface NavigationProps {
  links: Link[];
  home: string;
}

const Navigation = ({ links, home }: NavigationProps) => {
  return (
    <nav className="bg-black border-t-4 border-blue w-full">
      <div className="flex items-center justify-between px-4 pb-1">
        <div className="flex items-center">
          <Link href={home}>
            <Image src="/FDM.svg" alt="FDM" width={90} height={90} priority />
          </Link>
        </div>
        <div className="hidden md:flex space-x-14 text-white font-open text-base font-bold">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <h2>{link.title}</h2>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/notification">
            <Image
              src="/notification.svg"
              alt="Notifications"
              width={35}
              height={35}
              priority
            />
          </Link>
          <Link href="/Login">
            <Image
              src="/user_circle.svg"
              alt="Login"
              width={35}
              height={35}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
