import React from 'react';
// import './Header.css';
import Carousel from "./Carousel/Carousel";
import dat from "../../../../../data/carouselData.json";


const Header = () => {
    return (
        <div className='header'>
            <Carousel data={dat.slides}></Carousel>
        </div>
    )
};

export default Header;