import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images/about.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of about routes'}></Banner>
        </div>
    );
};

export default About;