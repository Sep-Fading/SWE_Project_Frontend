import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HomeCardProps {
    href: string;
    image: string; 
    text: string;
}

const HomeCard: React.FC<HomeCardProps> = ({href, image, text}) => {

    return (
        <div className="flex items-center justify-center bg-fdm-gradient size-40 rounded-md drop-shadow-lg text-white">
            <Link href={href}>
                <div className="">
                    <Image src={image} alt="Login" width={55} height={35} priority/>
                </div>
                <div>
                    <h1>{text}</h1>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;