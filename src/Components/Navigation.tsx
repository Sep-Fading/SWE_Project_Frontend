import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation: React.FC = () => {
    
    const linkData = [
        { title: 'Pending', href: '/pending-claims' },
        { title: 'Approved', href: '/approved-claims' },
        { title: 'Rejected', href: '/rejected-claims' },
    ];

    return (
        <nav className="bg-black border-t-4 border-blue">
            <div className="flex items-center justify-between px-4 pb-1">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/FDM-Group.svg" alt="FDM" width={90} height={90} priority/>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-14 text-white font-open text-base font-bold">
                    {linkData.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <h2>{link.title}</h2>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/notification">
                        <Image src="/notification.svg" alt="Login" width={35} height={35} priority/>
                    </Link>
                    <Link href="/login">
                        <Image src="/user_circle.svg" alt="Login" width={35} height={35} priority/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;