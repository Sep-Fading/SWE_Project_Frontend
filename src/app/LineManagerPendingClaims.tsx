import React from 'react';
import Navigation from "@/Components/Navigation";
import ClaimInfoBox from '@/Components/ClaimInfoBox';

const LineManagerClaimsList: React.FC = () => {
    

    return (
        <div>
            <Navigation />

            <header className='mx-[15rem] mt-[2rem]'>
                <h1 className='text-2xl text-[#1E9CE9]'>Pending Claims</h1>
                <hr className='border-3 border-black w-[15rem]'/>
            </header>

            <ClaimInfoBox />
        </div>
    );
};

export default LineManagerClaimsList;