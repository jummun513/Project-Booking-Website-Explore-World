import React from 'react';
import './Destinations.css';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images//destinations.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';

const Destinations = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of Destination routes'}></Banner>
        </>
    )
};

export default Destinations;