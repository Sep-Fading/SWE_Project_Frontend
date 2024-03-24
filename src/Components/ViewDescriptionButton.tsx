import React from 'react';
import Link from 'next/link';

const ViewDescriptionButton: React.FC = () => {

    return(
        <Link href="/description">
            <button className="my-[0.25rem] rounded-[10px] text-center bg-gradient-to-r from-[#1541C8] to-[#8820BB] text-white w-[200px] h-[35px]">View Description</button>
        </Link>
    );

};
export default ViewDescriptionButton;