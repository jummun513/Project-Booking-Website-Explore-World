import React, { useContext } from 'react';
import { destinationContext } from '../../../../../../App';
import './MostVisited.css';
import MvCard from './MvCard/MvCard';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';


const MostVisited = () => {

    const value = useContext(destinationContext);
    const sliceValue = value.slice(0, 5);

    const clickToSlide = (param) => {
        const carousel = document?.querySelector(".destination-container");
        const firstCardWidth = carousel && carousel.querySelector(".mvCard").offsetWidth;
        firstCardWidth && (carousel.scrollLeft += (param === "left") ? -firstCardWidth : firstCardWidth)
    }

    return (
        <div className='product-slider mx-3 md:mt-20 md:mb-20'>
            <div className='mt-1'>
                <div className='max-w-screen-xl mx-auto mb-10 md:flex justify-between items-center'>
                    <div>
                        <h1 className='body-width text-5xl text-[#ff7f00] font-semibold'>Explore Tours</h1>
                        <h1 className='body-width pt-3 text-xl'>By Popular Destinations</h1>
                    </div>
                    <div className='flex items-center mt-5 justify-between'>
                        <button type="button" className="rounded-lg md:rounded-3xl mb-2 md:mb-0 hover:bg-transparent hover:text-white border-2 mr-3 py-2 px-8 text-sm font-semibold bg-[#ffffffe6] text-black ease-linear duration-200">View All Tours</button>
                        <div>
                            <button onClick={() => clickToSlide('left')} className="pre-btn md:p-2 border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white ease-linear duration-200 rounded-full mr-2 md:mr-4"><LiaLongArrowAltLeftSolid className="h-10 w-10" /></button>
                            <button onClick={() => clickToSlide('right')} className="next-btn md:p-2 border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white ease-linear duration-200 rounded-full"><LiaLongArrowAltRightSolid className="h-10 w-10" /></button>
                        </div>
                    </div>
                </div>
                <div className='destination-container'>
                    {
                        sliceValue.map((data, idx) =>
                            <MvCard data={data} key={idx}></MvCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MostVisited;