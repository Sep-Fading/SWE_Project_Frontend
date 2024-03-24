import React from 'react';
import Button from './Button';


interface ClaimInfoBoxProps {
    headingText: string[];
    buttonText: string[];
}

const ClaimInfoBox: React.FC<ClaimInfoBoxProps> = ({headingText, buttonText}) => {

    return(
        <div className='flex flex-row justify-between mx-[15rem] p-[0.5rem] border-2 border-black rounded-[10px] mt-5'>

            <div className='flex flex-col justify-evenly'>
                {headingText.map((heading, index) => (
                    <h2 key={index}>{heading} :</h2>
                ))}
            </div>

            <div className='flex flex-col justify-evenly'>
                {buttonText.map((text, index) => (
                    <Button key={index} text={text} />
                ))}
            </div>

        </div>
    );

};
export default ClaimInfoBox;