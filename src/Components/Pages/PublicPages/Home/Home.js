import React from 'react';
import Header from './HeaderSection/Header';
import Navbar from '../../../Shared/Navbar/Navbar';
import MainSection from './MainSection/MainSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <MainSection></MainSection>
        </div>
    );
};

export default Home;