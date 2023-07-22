import React, { useState } from 'react';
import './Slider.css'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';



const Slider = ({ slide1, slide2 }) => {

    const [slide, setSlide] = useState(false);
    return (
        <div className="body-width slider text-white absolute bottom-8 w-full">
            <div className="flex justify-between">
                <div className='w-5/6 z-10'>
                    <div className={`${slide === false ? 'sliding1' : 'no-slide1'} absolute ease-in duration-500 card-container grid grid-cols-5 justify-center items-center w-5/6`}>
                        {
                            slide1.map((data, idx) => {
                                return (
                                    <div className='border-r-[1px] border-[rgba(255,255,255,0.2)] w-40' key={idx}>
                                        < div className="card flex flex-col items-center w-20 justify-center cursor-pointer hover:text-[#ff7f00] ease-linear duration-200" >
                                            <img className='rounded-full' src={data.src} alt={data.alt} width={60} height={60} />
                                            <p className='text-sm font-normal text-center mt-1'>{data.des}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    <div className={`${slide === true ? 'sliding2' : 'no-slide2'} absolute ease-out duration-1000 card-container grid grid-cols-5 justify-center items-center w-5/6`}>
                        {
                            slide2.map((data, idx) => {
                                return (
                                    <div className='border-r-[1px] border-[rgba(255,255,255,0.2)] w-40' key={idx}>
                                        < div className="card flex flex-col items-center w-20 justify-center cursor-pointer hover:text-[#ff7f00] ease-linear duration-200" >
                                            <img className='rounded-full' src={data.src} alt={data.alt} width={60} height={60} />
                                            <p className='text-sm font-normal text-center mt-1'>{data.des}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className='see-more w-1/6 z-20 flex flex-col justify-center items-center cursor-pointer'>
                    <div>
                        <button type="button" onClick={() => setSlide(!slide)}
                            className="arrow p-2 border-2 rounded-full">
                            {!slide ? <LiaLongArrowAltRightSolid className="rotate-0 h-10 w-10 ease-in-out duration-200" /> : <LiaLongArrowAltRightSolid className="rotate-180 h-10 w-10 ease-in-out duration-200" />}
                        </button>
                    </div>
                    <p className='text-sm mt-2 ease-linear duration-200'>See more 5 directions</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;