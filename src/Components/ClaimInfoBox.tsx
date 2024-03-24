import React from 'react';
import ApproveClaimButton from './ApproveClaimButton';
import RejectClaimButton from './RejectClaimButton';
import ViewDescriptionButton from './ViewDescriptionButton';

const ClaimInfoBox: React.FC = () => {

    const headingsData = [
        { title: 'Claim Date: ' },
        { title: 'Claim Amount: '},
        { title: 'Employee Claiming: ' },
        { title: 'Uploaded Files: '},
    ];

    return(
        <div className='flex flex-row justify-between mx-[15rem] p-[0.5rem] border-2 border-black rounded-[10px] mt-5'>

            <div className='flex flex-col justify-evenly'>
                {headingsData.map((heading, index) => (
                    <h2 key={index}>{heading.title}</h2>
                ))}
            </div>

            <div className='flex flex-col justify-evenly'>
                <ApproveClaimButton />
                <RejectClaimButton />
                <ViewDescriptionButton />

            </div>

        </div>
    );

};
export default ClaimInfoBox;