import React from 'react';
import Link from 'next/link';

const RejectClaimButton: React.FC = () => {

    return(
        <Link href="/reject">
            <button className="my-[0.25rem] rounded-[10px] text-center bg-gradient-to-r from-[#1541C8] to-[#8820BB] text-white w-[200px] h-[35px]">Reject Claim</button>
        </Link>
    );

};
export default RejectClaimButton;