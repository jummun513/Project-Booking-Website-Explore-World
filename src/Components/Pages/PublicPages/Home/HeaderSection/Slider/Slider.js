import React, { useState } from 'react';
import './Slider.css'
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';


const slide1 = [
    { url: 'https://i.ibb.co/pjMK8T8/img1.jpg', alt: 'mountain pic', des: 'Mountain Tours' },
    { url: 'https://i.ibb.co/pjMK8T8/img1.jpg', alt: 'mountain pic', des: 'Mountain Tours' },
    { url: 'https://i.ibb.co/pjMK8T8/img1.jpg', alt: 'mountain pic', des: 'Mountain Tours' },
    { url: 'https://i.ibb.co/pjMK8T8/img1.jpg', alt: 'mountain pic', des: 'Mountain Tours' },
    { url: 'https://i.ibb.co/pjMK8T8/img1.jpg', alt: 'mountain pic', des: 'Mountain Tours' }

];

const slide2 = [
    { url: 'https://i.ibb.co/gzvYRvR/img2.jpg', alt: 'beach pic', des: 'Beach Tours' },
    { url: 'https://i.ibb.co/gzvYRvR/img2.jpg', alt: 'beach pic', des: 'Beach Tours' },
    { url: 'https://i.ibb.co/gzvYRvR/img2.jpg', alt: 'beach pic', des: 'Beach Tours' },
    { url: 'https://i.ibb.co/gzvYRvR/img2.jpg', alt: 'beach pic', des: 'Beach Tours' },
    { url: 'https://i.ibb.co/gzvYRvR/img2.jpg', alt: 'beach pic', des: 'Beach Tours' }
]

const Slider = () => {
    const [slide, setSlide] = useState(false)
    return (
        <div className="body-width slider text-white absolute bottom-8 w-full">
            <div className="flex justify-between">
                {
                    !slide ?
                        <div className="card-container flex justify-between w-4/5">
                            {
                                slide1.map((data) =>
                                    <>
                                        < div className="card flex flex-col items-center w-20 justify-center cursor-pointer hover:text-[#ff7f00] ease-linear duration-200" >
                                            <img className='rounded-full' src={data.url} alt={data.alt} width={60} height={60} />
                                            <p className='text-sm font-normal text-center mt-1'>{data.des}</p>
                                        </div>
                                        <div className='border-r-2 border-[#ffffff4f]'></div>
                                    </>)
                            }
                        </div>
                        :
                        <div className="card-container flex justify-between w-4/5">
                            {
                                slide2.map((data) =>
                                    <>
                                        <div className="card flex flex-col items-center w-20 justify-center cursor-pointer hover:text-[#ff7f00] ease-linear duration-200">
                                            <img className='rounded-full' src={data.url} alt={data.alt} width={60} height={60} />
                                            <p className='text-sm font-normal text-center mt-1'>{data.des}</p>
                                        </div>
                                        <div className='border-r-2 border-[#ffffff4f]'></div>
                                    </>)
                            }
                        </div>
                }

                <div className='see-more flex flex-col justify-center items-center cursor-pointer'>
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