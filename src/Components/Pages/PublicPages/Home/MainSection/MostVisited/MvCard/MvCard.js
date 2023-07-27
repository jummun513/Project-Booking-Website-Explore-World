import React from 'react';
import './MvCard.css'

const MvCard = ({ data }) => {
    return (
        <div className='mvCard mr-2 md:mr-8'>
            <div>
                <img className='rounded-2xl' src={data.picture} alt="" />
            </div>
        </div>
    );
};

export default MvCard;


{/* <div key={idx} className='w-[720px] card relative cursor-pointer mb-7 md:mb-0'>
    <div>
        <img className='rounded-3xl' src={data.picture} alt="" />
    </div>
    <div className='absolute w-full h-full bg-black opacity-50 top-0'></div>
    <div className='absolute px-2 md:px-4 z-20 bottom-4 md:bottom-10 w-full h-fit'>
        <div className='flex items-center'>
            <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
            <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
            <BsStarFill className='text-yellow-400 mr-1'></BsStarFill>
            <BsStarHalf className='text-yellow-400 mr-1'></BsStarHalf>
            <BsStar className='text-yellow-400 mr-1'></BsStar>
            <p className='text-sm'>({data.review})</p>
        </div>
        <h1 className='md:text-2xl font-semibold my-1 md:my-3 hover:text-[#ff7f00] ease-linear duration-200'>{data.heading} | {data.price}</h1>
        <p className='text-gray-400 text-sm font-semibold italic'>{data.desc}</p>
        <div className='flex items-center'>
            <BsClockFill className='mr-2'></BsClockFill>
            <p className='text-gray-200'>{data.days}</p>
        </div>
    </div>
    <div className='absolute bg-[#ff8000d4] font-semibold rounded-md top-2 md:top-4 right-2 md:right-4 px-4 py-2'>
        20% off
    </div>
</div> */}