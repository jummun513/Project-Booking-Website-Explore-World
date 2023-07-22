import React, { useEffect, useRef, useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import "./Carousel.css";

export default function Carousel({ data }) {

  const timeRef = useRef(null);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  // useEffect(() => {
  //   timeRef.current = setTimeout(() => {
  //     nextSlide();
  //   }, 4000);
  // })

  return (
    <div className="carousel relative flex items-center justify-center">
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <div className="h-full w-full absolute bg-black opacity-40"></div>

      <div className="body-width carousel-content absolute flex justify-between text-white w-full">
        <div className="welcome-text w-3/5">
          <h1 className="text-5xl font-bold">Welcome, To Explore World!</h1>
          <p className="text-xl font-light my-5 leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est recusandae ex eius nulla saepe unde, voluptas quia facere veritatis quibusdam.</p>
          <div className="flex items-center">
            <button type="button" className="rounded-3xl bg-[#FF7F00] border-[#FF7F00] border-2 mr-3 py-2 px-7 text-sm font-semibold hover:bg-[#ffffffe6] hover:text-[#ff7f00] ease-in duration-200">Search a Tour</button>
            <button type="button" className="rounded-3xl bg-transparent border-2 mr-3 py-2 px-8 text-sm font-semibold hover:bg-[#ffffffe6] hover:text-black ease-linear duration-200">Go a Tour</button>
            <button type="button" onClick={nextSlide}
              className="arrow p-2 border-2 rounded-full hover:text-[#c2c2c2] hover:border-[#c2c2c2] ease-linear duration-200"><LiaLongArrowAltRightSolid className="h-8 w-8" /></button>
          </div>
        </div>
        <div className="indicators flex flex-col justify-evenly">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={`${slide === idx ? "indicator" : "indicator indicator-inactive"} rounded-full h-3 w-3`}
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};